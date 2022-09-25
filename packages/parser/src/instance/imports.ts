export function parseImports(json: SveltosisComponent, node: any) {
  const source = node.source?.value;
  if (source === 'svelte') return; // Do not import anything from svelte
  // ^ Maybe this should even be stricter and only allow relative imports and alias ones
  // as you can't import any other svelte specific libraries either...Or can we?

  const imports = Object.values(node.specifiers)
    .map((index: any) => {
      return {
        [index.local.name]: index.type === 'ImportDefaultSpecifier' ? 'default' : index.local.name,
      };
    })
    .reduce((a, v) => {
      Object.assign(a, v);
      return a;
    }, {});

  // only add imports which are actually used
  if (Object.keys(imports).length > 0) {
    json.imports = [...json.imports, { imports, path: source }];
    // TODO: if import source already exist, combine them
    // e.g. import { lowercase } from 'lodash';
    // e.g. import { uppercase } from 'lodash';
    // should become import { lowercase, uppercase } from 'lodash';
  }
}
