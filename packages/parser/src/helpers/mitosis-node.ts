import { MitosisNode } from "@builder.io/mitosis";

export function createMitosisNode(): MitosisNode {
  return {
    "@type": "@builder.io/mitosis/node",
    name: "",
    meta: {},
    scope: {},
    children: [],
    bindings: {},
    properties: {},
  };
}
