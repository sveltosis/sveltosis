import { parseHtmlNode } from '.';
import { possiblyAppendPropsOrState as possiblyAppendPropertiesOrState } from '../helpers/bindings';
import { createMitosisNode } from '../helpers/mitosis-node';
import { parseChildren } from '../helpers/children';

export function parseIfElse(json: SveltosisComponent, node: any) {
  const mitosisNode = createMitosisNode();
  mitosisNode.name = 'Show';
  mitosisNode.bindings = {
    when: {
      code: possiblyAppendPropertiesOrState(
        json,
        possiblyAppendPropertiesOrState(json, node.expression.name),
      ),
    },
  };

  mitosisNode.children = parseChildren(json, node);

  if (node.else) {
    mitosisNode.meta.else =
      node.else.children?.length === 1
        ? parseHtmlNode(json, node.else.children[0])
        : {
            ...createMitosisNode(),
            name: 'div',
            children: node.else.children?.map((n: any) => parseHtmlNode(json, n)) ?? [],
          };
  }
  return mitosisNode;
}
