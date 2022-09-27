import { parse } from 'svelte/compiler';

import { parseInstance } from './instance';
import { parseCss } from './css';
import { parseHtml } from './html';
import { MitosisComponent } from '@builder.io/mitosis';
import { omit } from 'lodash';

import type { Ast } from 'svelte/types/compiler/interfaces';

function mapAstToMitosisJson(ast: Ast, name: string): MitosisComponent {
  const json: SveltosisComponent = {
    '@type': '@builder.io/mitosis/component',
    inputs: [],
    state: {},
    props: {},
    refs: {},
    hooks: {},
    imports: [],
    children: [],
    context: { get: {}, set: {} },
    subComponents: [],
    meta: {},
    name,
  };

  parseInstance(ast, json);
  parseHtml(ast, json);
  parseCss(ast, json);

  return omit(json, ['props']);
}

export const sveltosis = function (string_: string, path: string): MitosisComponent | undefined {
  const ast = parse(string_);
  const componentName = path.split('/').pop()?.split('.')[0] ?? 'MyComponent';
  return mapAstToMitosisJson(ast, componentName);
};
