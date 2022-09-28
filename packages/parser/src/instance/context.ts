import { generate } from 'astring';
import { possiblyAppendPropertiesOrState } from '../helpers/bindings';

import type {
  BaseCallExpression,
  Identifier,
  VariableDeclaration,
  SimpleLiteral,
  ExpressionStatement,
} from 'estree';

export function parseGetContext(json: SveltosisComponent, node: VariableDeclaration) {
  if (node.declarations.length > 0) {
    const declaration = node.declarations[0];
    const { name } = declaration.id as Identifier;
    const arguments_ = (declaration.init as BaseCallExpression)?.arguments;

    if (arguments?.length) {
      const argument = arguments_[0] as SimpleLiteral;

      json.context.get[name] = {
        name: generate(argument),
        path: '',
      };
    }
  }
}

export function parseSetContext(json: SveltosisComponent, node: ExpressionStatement) {
  if (
    node.type === 'ExpressionStatement' &&
    node.expression.type === 'CallExpression' &&
    node.expression.arguments?.length
  ) {
    const hook = (node.expression.callee as Identifier).name;

    const argument = node.expression.arguments[0];

    const object: { code?: string } = {};

    if (argument.type === 'ArrowFunctionExpression') {
      object.code = generate(argument.body);
    }

    if (hook === 'setContext') {
      const key = node.expression.arguments[0] as SimpleLiteral;
      const value = node.expression.arguments[1] as Identifier;

      json.context.set[key.value as string] = {
        name: generate(key) as string,
        ref: possiblyAppendPropertiesOrState(json, value.name),
      };
    }
  }
}
