import { createMitosisNode } from '../helpers/mitosis-node';

export function parseText(node: any) {
  return {
    ...createMitosisNode(),
    name: 'div',
    properties: {
      _text: node.data,
    },
  };
}
