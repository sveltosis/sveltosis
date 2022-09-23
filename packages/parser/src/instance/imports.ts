export function parseImports(json, node) {
  const source = node.source?.value;
  if (source === "svelte") return; // Do not import anything from svelte
  // ^ Maybe this should even be stricter and only allow relative imports and alias ones
  // as you can't import any other svelte specific libraries either...Or can we?

  const imports = node.specifiers.map((i: any) => ({
    [i.imported.name]: i.imported.name,
  }));

  // only add imports which are actually used
  if (Object.keys(imports.length)) {
    json.imports = [...json.imports, { imports, path: [source] }];
    // TODO: if import source already exist, combine them
    // e.g. import { lowercase } from 'lodash';
    // e.g. import { uppercase } from 'lodash';
    // should become import { lowercase, uppercase } from 'lodash';
  }
}
