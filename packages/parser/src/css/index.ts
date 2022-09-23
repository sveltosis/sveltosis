import { walk } from "svelte/compiler";
import * as csstree from "css-tree";

export const parseCss = (ast: any, json: SveltosisComponent) => {
  walk(ast.css, {
    enter(node: any, parent: any) {
      if (node.type === "Rule") {
        let selector = csstree.generate(node.prelude);
        let block = csstree.generate(node.block);
        // todo: add it to the bindings of an element
        // todo: support .card > .input
        // todo: handle multiple blocks
      }
    },
  });
};
