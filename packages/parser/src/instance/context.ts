import { generate } from "astring";
import { possiblyAppendPropsOrState } from "../helpers/bindings";

export function parseGetContext(json: SveltosisComponent, node: any) {
  if (node.declarations.length) {
    const name = node.declarations[0].id.name;
    const key = node.declarations[0].init.arguments?.length
      ? node.declarations[0].init.arguments[0].value
      : null;
    json.context.get[name] = {
      name: node.declarations[0].init.arguments[0].value,
      path: "",
    };
  }
}

export function parseSetContext(
  json: SveltosisComponent,
  node: any,
  parent: any,
  ctx: any
) {
  if (
    node.type === "ExpressionStatement" &&
    node.expression.type === "CallExpression"
  ) {
    if (node.expression.arguments?.length) {
      let hook = node.expression.callee.name;

      let arg = node.expression.arguments[0];

      let obj: { code?: any } = {};

      if (arg.type === "ArrowFunctionExpression") {
        obj.code = generate(arg.body);
      }

      if (hook === "setContext") {
        let key = node.expression.arguments[0];
        let value = node.expression.arguments[1];
        json.context.set[key.value] = {
          name: key.value,
          ref: possiblyAppendPropsOrState(json, value.value),
        };
      } else if (parent?.type === "BlockStatement") {
        ctx.skip();
      } else {
        //
      }
    }
  }
}
