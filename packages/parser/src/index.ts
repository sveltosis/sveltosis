import { parse, preprocess } from 'svelte/compiler';
import preprocessor from 'svelte-preprocess';

import { parseInstance } from './instance';
import { parseCss } from './css';
import { parseHtml } from './html';
import { omit } from 'lodash';

import type { Ast } from 'svelte/types/compiler/interfaces';
import type { MitosisComponent } from '@builder.io/mitosis';

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

export const sveltosis = async function (
  string_: string,
  path: string,
): Promise<MitosisComponent | undefined> {
  const processedString = await preprocess(string_, preprocessor(), {
    filename: path.split('/').pop(),
  });
  const ast = parse(processedString.code);
  const componentName = path.split('/').pop()?.split('.')[0] ?? 'MyComponent';
  return mapAstToMitosisJson(ast, componentName);
};
