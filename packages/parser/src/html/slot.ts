import { upperFirst } from "lodash";
import { createMitosisNode } from "../helpers/mitosis-node";

export function parseSlot(json: SveltosisComponent, node: any) {
  let mitosisNode = createMitosisNode();
  if (
    node.attributes.length &&
    node.attributes[0].value.length &&
    node.attributes[0].value[0].data?.trim().length
  ) {
    mitosisNode.name = "div";
    let slotName = upperFirst(node.attributes[0].value[0]?.data);

    mitosisNode.bindings._text = {
      code: `props.slot${slotName}`,
    };
  } else {
    mitosisNode.name = "Slot";
  }
  return mitosisNode;
}
