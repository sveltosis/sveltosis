import { createMitosisNode } from "../helpers/mitosis-node";
import { parseChildren } from "../helpers/children";

export function parseEach(json: SveltosisComponent, node: any) {
  return {
    ...createMitosisNode(),
    name: "For",
    scope: { forName: node.context.name },
    bindings: {
      each: {
        code: node.expression.name,
      },
    },
    children: parseChildren(json, node),
  };
}
