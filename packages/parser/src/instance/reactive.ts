import { generate } from 'astring';
import { possiblyAppendPropsOrState } from '../helpers/bindings';

export function parseReactive(json: SveltosisComponent, node: any) {
  if (!node.body.expression) {
    let wrap = node.body.type !== 'BlockStatement';
    let name = `reactive${
      Object.values(json.state).filter((i: any) => i.type === 'getter').length
    }`;
    json.state[name] = {
      code: `get ${name}() ${wrap ? '{' : ''}${possiblyAppendPropsOrState(
        json,
        generate(node.body),
      )}${wrap ? '}' : ''}`,
      type: 'getter',
    };
  } else if (node.body.expression.left) {
    let { name } = node.body.expression.left;
    json.state[name] = {
      code: `get ${name}() {\n return ${possiblyAppendPropsOrState(
        json,
        generate(node.body.expression.right),
      )}}`,
      type: 'getter',
    };
  }
}
