import { walk } from "svelte/compiler";
import { parseEach } from "./each";
import { parseElement } from "./element";
import { parseFragment } from "./fragment";
import { parseIfElse } from "./if-else";
import { parseMustacheTag, parseRawMustacheTag } from "./mustache-tag";
import { parseSlot } from "./slot";
import { parseText } from "./text";

import { MitosisNode } from "@builder.io/mitosis";

export function parseHtml(ast: any, json: SveltosisComponent) {
  // todo: should filter children and check if just 1 has length
  const html =
    ast.html.children.length === 2 && !ast.html.children[0].raw.trim().length
      ? ast.html.children[1]
      : ast.html;

  walk(html, {
    enter(node: any, parent: any) {
      if (parent?.children || node.data === "\n\n") {
        this.skip();
        return;
      }

      const mitosisNode = parseHtmlNode(node, json);

      if (mitosisNode) {
        json.children.push(mitosisNode);
      }
    },
  });
}

export function parseHtmlNode(
  node: any,
  json: SveltosisComponent
): MitosisNode | undefined {
  let mitosisNode: MitosisNode = {
    "@type": "@builder.io/mitosis/node",
    name: "",
    meta: {},
    scope: {},
    children: [],
    bindings: {},
    properties: {},
  };

  if (node.type === "Element") {
    return parseElement(json, node);
  } else if (node.type === "MustacheTag") {
    return parseMustacheTag(json, node);
  } else if (node.type === "RawMustacheTag") {
    return parseRawMustacheTag(json, node);
  } else if (node.type === "IfBlock") {
    return parseIfElse(json, node);
  } else if (node.type === "EachBlock") {
    return parseEach(json, node);
  } else if (node.type === "Text") {
    return parseText(node);
  } else if (node.type === "Fragment") {
    return parseFragment(json, node);
  } else if (node.type === "Slot") {
    return parseSlot(json, node);
  } else if (node.type === "Comment") {
    // do nothing :) probably skip?
  } else {
    mitosisNode.name = "div";
  }
}
