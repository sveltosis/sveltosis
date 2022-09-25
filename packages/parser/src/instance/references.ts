import { generate } from 'astring';
import { isString, some } from 'lodash';
import { possiblyAppendPropertiesOrState } from '../helpers/bindings';

function getParsedValue(json: SveltosisComponent, element: any) {
  return element.type === 'Identifier' ? possiblyAppendPropertiesOrState(json, element.name) : possiblyAppendPropertiesOrState(json, element.value);
}

function isPropertyOrStateReference(index: any) {
  return isString(index) && (index.includes('props.') || index.includes('state.'));
}

export function parseReferences(json: SveltosisComponent, node: any) {
  const declaration = node.declarations[0];

  let code;

  if (declaration.init.type === 'ArrayExpression') {
    code = declaration.init.elements.map((element: any) => {
      return getParsedValue(json, element);
    });

    if (some(code, (index: string) => isPropertyOrStateReference(index))) {
      const name = declaration.id.name;
      json.state[name] = {
        code: `get ${name}() { return [${code.map((index: any) => {
          if (isPropertyOrStateReference(index)) {
            return index;
          }
          return JSON.stringify(index);
        })}]}`,
        type: 'getter',
      };
      return;
    }
  } else if (declaration.init.type === 'ObjectExpression') {
    const properties = declaration.init.properties.map((element: any) => {
      return {
        [generate(element.key)]: getParsedValue(json, element.value),
      };
    });

    code = {};
    for (const item of properties) {
      Object.assign(code, { [item.key]: item.value });
    }
  } else {
    code = possiblyAppendPropertiesOrState(json, declaration.init.value);
  }

  json.state[declaration.id.name] = {
    code,
    type: 'property',
  };
}
