import { generate } from 'astring';
import { possiblyAppendPropertiesOrState as possiblyAppendPropertiesOrState } from '../helpers/bindings';

export function parseGetContext(json: SveltosisComponent, node: any) {
  if (node.declarations.length > 0) {
    const name = node.declarations[0].id.name;
    const key = node.declarations[0].init.arguments?.length
      ? node.declarations[0].init.arguments[0].value
      : null;
    json.context.get[name] = {
      name: node.declarations[0].init.arguments[0].value,
      path: '',
    };
  }
}

export function parseSetContext(json: SveltosisComponent, node: any, parent: any, context: any) {
  if (
    node.type === 'ExpressionStatement' &&
    node.expression.type === 'CallExpression' &&
    node.expression.arguments?.length
  ) {
    const hook = node.expression.callee.name;

    const argument = node.expression.arguments[0];

    const object: { code?: any } = {};

    if (argument.type === 'ArrowFunctionExpression') {
      object.code = generate(argument.body);
    }

    if (hook === 'setContext') {
      const key = node.expression.arguments[0];
      const value = node.expression.arguments[1];
      json.context.set[key.value] = {
        name: key.value,
        ref: possiblyAppendPropertiesOrState(json, value.value),
      };
    } else if (parent?.type === 'BlockStatement') {
      context.skip();
    } else {
      //
    }
  }
}
