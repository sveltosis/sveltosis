import { walk } from 'svelte/compiler';
import { parseEach } from './each';
import { parseElement } from './element';
import { parseFragment } from './fragment';
import { parseIfElse } from './if-else';
import { parseMustacheTag, parseRawMustacheTag } from './mustache-tag';
import { parseSlot } from './slot';
import { parseText } from './text';

import type { MitosisNode } from '@builder.io/mitosis';
import type { TemplateNode } from 'svelte/types/compiler/interfaces';

export function parseHtml(template: TemplateNode, json: SveltosisComponent) {
  const html =
    template.children?.length === 2 && template.children[0].raw.trim().length === 0
      ? template.children[1]
      : template;

  walk(html, {
    enter(node: any, parent: any) {
      if (parent?.children || node.data === '\n\n') {
        this.skip();
        return;
      }

      const mitosisNode = parseHtmlNode(json, node);

      if (mitosisNode) {
        json.children.push(mitosisNode);
      }
    },
  });
}

export function parseHtmlNode(
  json: SveltosisComponent,
  node: TemplateNode,
): MitosisNode | undefined {
  const mitosisNode: MitosisNode = {
    '@type': '@builder.io/mitosis/node',
    name: '',
    meta: {},
    scope: {},
    children: [],
    bindings: {},
    properties: {},
  };

  switch (node.type) {
    case 'Element':
    case 'InlineComponent': {
      return parseElement(json, node);
    }
    case 'MustacheTag': {
      return parseMustacheTag(json, node);
    }
    case 'RawMustacheTag': {
      return parseRawMustacheTag(json, node);
    }
    case 'IfBlock': {
      return parseIfElse(json, node);
    }
    case 'EachBlock': {
      return parseEach(json, node);
    }
    case 'Text': {
      return parseText(node);
    }
    case 'Fragment': {
      return parseFragment(json, node);
    }
    case 'Slot': {
      return parseSlot(json, node);
    }
    case 'Comment': {
      // do nothing :) probably skip?

      break;
    }
    default: {
      mitosisNode.name = 'div';
    }
  }
}
