import { generate } from 'astring';
import { isString, some } from 'lodash';
import type {
  Identifier,
  VariableDeclaration,
  Property,
  SimpleLiteral,
  Expression,
  Pattern,
} from 'estree';

function getParsedValue(json: SveltosisComponent, element: Expression | Pattern) {
  return element.type === 'Identifier'
    ? element.name
    : ((element as SimpleLiteral).value as string);
}

function isPropertyOrStateReference(index: string) {
  return isString(index) && (index.includes('props.') || index.includes('state.'));
}

export function parseReferences(json: SveltosisComponent, node: VariableDeclaration) {
  const declaration = node.declarations[0];
  let code: string[] | Record<string, string> | string;

  if (declaration?.init?.type === 'ArrayExpression') {
    code = declaration.init.elements.map((element) => {
      return getParsedValue(json, element as Expression);
    });

    if (some(code, (index: string) => isPropertyOrStateReference(index))) {
      const name = (declaration.id as Identifier).name;
      json.state[name] = {
        code: `get ${name}() { return [${code.map((index) => {
          if (isPropertyOrStateReference(index)) {
            return index;
          }
          return JSON.stringify(index);
        })}]}`,
        type: 'getter',
      };
      return;
    }
  } else if (declaration?.init?.type === 'ObjectExpression') {
    const properties = declaration.init.properties.map((element) => {
      const element_ = element as Property;
      return {
        [generate(element_.key)]: getParsedValue(json, element_.value),
      };
    });

    code = {};
    for (const item of properties) {
      Object.assign(code, { [item.key]: item.value });
    }
  } else {
    code = (declaration?.init as SimpleLiteral)?.value as string;
  }

  json.state[(declaration.id as Identifier).name] = {
    code,
    type: 'property',
  };
}
