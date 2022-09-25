import { parseHtmlNode } from '../html';

export function filterChildren(children: any) {
  return (
    children?.filter(
      (n: any) => n.type !== 'Comment' && (n.type !== 'Text' || n.data?.trim().length),
    ) ?? []
  );
}

export function parseChildren(json: SveltosisComponent, node: any) {
  let children = filterChildren(node.children).map((n: any) => parseHtmlNode(json, n)) ?? [];
  return children;
}
