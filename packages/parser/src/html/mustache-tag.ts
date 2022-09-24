import { generate } from "astring";
import { possiblyAppendPropsOrState } from "../helpers/bindings";
import { createMitosisNode } from "../helpers/mitosis-node";

export function parseMustacheTag(json: SveltosisComponent, node: any) {
  let mitosisNode = createMitosisNode();
  mitosisNode.name = "div";
  mitosisNode.bindings["_text"] = {
    code: possiblyAppendPropsOrState(json, generate(node.expression)),
  };
  return mitosisNode;
}

export function parseRawMustacheTag(json: SveltosisComponent, node: any) {
  let mitosisNode = createMitosisNode();
  mitosisNode.name = "div";
  mitosisNode.bindings.innerHTML = {
    code: possiblyAppendPropsOrState(json, generate(node.expression)),
  };
  return mitosisNode;
}
