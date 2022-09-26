import { generate } from 'astring';

function parseHookBody(node: any, stripCurlyBraces = true) {
  let code = generate(node.expression.arguments[0].body);

  if (stripCurlyBraces && code?.trim().length) {
    code = code.slice(1, -1);
  }

  return code;
}

export function parseOnMount(json: SveltosisComponent, node: any) {
  json.hooks.onMount = {
    code: parseHookBody(node),
  };
}

export function parseOnDestroy(json: SveltosisComponent, node: any) {
  json.hooks.onUnMount = {
    code: parseHookBody(node),
  };
}

export function parseAfterUpdate(json: SveltosisComponent, node: any) {
  json.hooks.onUpdate = [
    {
      code: parseHookBody(node, false),
    },
  ];
}
