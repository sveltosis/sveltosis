import { upperFirst } from 'lodash';
import { createMitosisNode } from '../helpers/mitosis-node';

export function parseSlot(json: SveltosisComponent, node: any) {
  const mitosisNode = createMitosisNode();
  if (
    node.attributes.length > 0 &&
    node.attributes[0].value.length > 0 &&
    node.attributes[0].value[0].data?.trim().length
  ) {
    mitosisNode.name = 'div';
    const slotName = upperFirst(node.attributes[0].value[0]?.data);

    mitosisNode.bindings._text = {
      code: `props.slot${slotName}`,
    };
  } else {
    mitosisNode.name = 'Slot';
  }
  return mitosisNode;
}
