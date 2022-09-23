import { generate } from "astring";
import { possiblyAppendPropsOrState } from "../helpers/bindings";
import { createMitosisNode } from "../helpers/mitosis-node";

export function parseMustacheTag(json: SveltosisComponent, node: any) {
  let mitosisNode = createMitosisNode();
  mitosisNode.name = "div";
  if (node.expression.type === "ConditionalExpression") {
    mitosisNode.bindings["_text"] = {
      code: `${possiblyAppendPropsOrState(
        json,
        node.expression.test.name
      )} ? ${possiblyAppendPropsOrState(
        json,
        node.expression.consequent.raw || node.expression.consequent.name
      )} : ${possiblyAppendPropsOrState(json, node.expression.alternate.raw)}`,
    };
  } else {
    mitosisNode.bindings["_text"] = {
      code: possiblyAppendPropsOrState(json, node.expression.name),
    };
  }
  return mitosisNode;
}

export function parseRawMustacheTag(json: SveltosisComponent, node: any) {
  let mitosisNode = createMitosisNode();
  mitosisNode.name = "div";
  mitosisNode.bindings["innerHTML"] = {
    code: possiblyAppendPropsOrState(json, generate(node.expression)),
  };
  return mitosisNode;
}
