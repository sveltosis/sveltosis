import { generate } from 'astring';
import { possiblyAppendPropertiesOrState as possiblyAppendPropertiesOrState } from '../helpers/bindings';

function getParsedValue(json: SveltosisComponent, element: any) {
  return element.type === 'Identifier'
    ? possiblyAppendPropertiesOrState(json, element.name)
    : possiblyAppendPropertiesOrState(json, element.value);
}

export function parseRefs(json: SveltosisComponent, node: any) {
  const declaration = node.declarations[0];

  let code;

  if (declaration.init.type === 'ArrayExpression') {
    code = declaration.init.elements.map((element: any) => {
      return getParsedValue(json, element);
    });
  } else if (declaration.init.type === 'ObjectExpression') {
    code = declaration.init.properties
      .map((element: any) => {
        return {
          [generate(element.key)]: getParsedValue(json, element.value),
        };
      })
      .reduce((object: any, item: any) => {
        return ((object[item.key] = item.value), object), {};
      });
  } else {
    code = possiblyAppendPropertiesOrState(json, declaration.init.value);
  }

  json.state[declaration.id.name] = {
    code,
    type: 'property',
  };
}
