import { parseHtmlNode } from "../html";

export function parseChildren(node: any, json) {
  let children =
    node.children
      ?.filter(
        (n: any) =>
          n.type !== "Comment" && (n.type !== "Text" || n.data?.trim().length)
      )
      ?.map((n: any) => parseHtmlNode(n, json)) ?? [];
  return children;
}
