import { generate } from 'astring';
import type { ExpressionStatement, BaseCallExpression, BaseFunction } from 'estree';
import { possiblyAppendPropertiesOrState } from '../helpers/bindings';

function parseHookBody(
  json: SveltosisComponent,
  node: ExpressionStatement,
  stripCurlyBraces = true,
) {
  const arguments_ = (node.expression as BaseCallExpression)?.arguments;

  let code = generate((arguments_[0] as BaseFunction).body);

  if (stripCurlyBraces && code?.trim().length) {
    code = code.slice(1, -1);
  }

  return possiblyAppendPropertiesOrState(json, code);
}

export function parseOnMount(json: SveltosisComponent, node: ExpressionStatement) {
  json.hooks.onMount = {
    code: parseHookBody(json, node),
  };
}

export function parseOnDestroy(json: SveltosisComponent, node: ExpressionStatement) {
  json.hooks.onUnMount = {
    code: parseHookBody(json, node),
  };
}

export function parseAfterUpdate(json: SveltosisComponent, node: ExpressionStatement) {
  json.hooks.onUpdate = [
    {
      code: parseHookBody(json, node, false),
    },
  ];
}
