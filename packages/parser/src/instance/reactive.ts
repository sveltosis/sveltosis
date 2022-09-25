import { generate } from 'astring';
import { possiblyAppendPropertiesOrState as possiblyAppendPropertiesOrState } from '../helpers/bindings';

export function parseReactive(json: SveltosisComponent, node: any) {
  if (!node.body.expression) {
    const wrap = node.body.type !== 'BlockStatement';
    const name = `reactive${
      Object.values(json.state).filter((index: any) => index.type === 'getter').length
    }`;
    json.state[name] = {
      code: `get ${name}() ${wrap ? '{' : ''}${possiblyAppendPropertiesOrState(
        json,
        generate(node.body),
      )}${wrap ? '}' : ''}`,
      type: 'getter',
    };
  } else if (node.body.expression.left) {
    const { name } = node.body.expression.left;
    json.state[name] = {
      code: `get ${name}() {\n return ${possiblyAppendPropertiesOrState(
        json,
        generate(node.body.expression.right),
      )}}`,
      type: 'getter',
    };
  }
}
