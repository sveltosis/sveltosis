import { generate } from 'astring';
import { isString, some } from 'lodash';
import { possiblyAppendPropsOrState } from '../helpers/bindings';

function getParsedValue(json: SveltosisComponent, el: any) {
  if (el.type === 'Identifier') {
    return possiblyAppendPropsOrState(json, el.name);
  } else {
    return possiblyAppendPropsOrState(json, el.value);
  }
}

function isPropOrStateRef(i: any) {
  return isString(i) && (i.indexOf('props.') >= 0 || i.indexOf('state.') >= 0);
}

export function parseRefs(json: SveltosisComponent, node: any) {
  const declaration = node.declarations[0];

  let code;

  if (declaration.init.type === 'ArrayExpression') {
    code = declaration.init.elements.map((el: any) => {
      return getParsedValue(json, el);
    });

    if (some(code, (i: string) => isPropOrStateRef(i))) {
      let name = declaration.id.name;
      json.state[name] = {
        code: `get ${name}() { return [${code.map((i: any) => {
          if (isPropOrStateRef(i)) {
            return i;
          }
          return JSON.stringify(i);
        })}]}`,
        type: 'getter',
      };
      return;
    }
  } else if (declaration.init.type === 'ObjectExpression') {
    code = declaration.init.properties
      .map((el: any) => {
        return {
          [generate(el.key)]: getParsedValue(json, el.value),
        };
      })
      .reduce((obj: any, item: any) => {
        return ((obj[item.key] = item.value), obj), {};
      });
  } else {
    code = possiblyAppendPropsOrState(json, declaration.init.value);
  }

  json.state[declaration.id.name] = {
    code,
    type: 'property',
  };
}
