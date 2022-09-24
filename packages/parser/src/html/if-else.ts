import { parseHtmlNode } from ".";
import { possiblyAppendPropsOrState } from "../helpers/bindings";
import { createMitosisNode } from "../helpers/mitosis-node";
import { parseChildren } from "../helpers/children";

export function parseIfElse(json: SveltosisComponent, node: any) {
  let mitosisNode = createMitosisNode();
  mitosisNode.name = "Show";
  mitosisNode.bindings = {
    when: {
      code: possiblyAppendPropsOrState(
        json,
        possiblyAppendPropsOrState(json, node.expression.name)
      ),
    },
  };

  mitosisNode.children = parseChildren(json, node);

  if (node.else) {
    if (node.else.children?.length === 1) {
      mitosisNode.meta.else = parseHtmlNode(json, node.else.children[0]);
    } else {
      mitosisNode.meta.else = {
        ...createMitosisNode(),
        name: "div",
        children:
          node.else.children?.map((n: any) => parseHtmlNode(json, n)) ?? [],
      };
    }
  }
  return mitosisNode;
}
