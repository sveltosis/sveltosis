import { parse } from "svelte/compiler";

import { parseInstance } from "./instance";
import { parseCss } from "./css";
import { parseHtml } from "./html";
import { MitosisComponent } from "@builder.io/mitosis";
import { omit } from "lodash";

function mapAstToMitosisJson(ast: any, name: string): MitosisComponent {
  let json: SveltosisComponent = {
    "@type": "@builder.io/mitosis/component",
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
  parseCss(ast, json);
  parseHtml(ast, json);

  return omit(json, ["props"]);
}

export const sveltosis = function (
  str: string,
  path: string
): MitosisComponent | undefined {
  const ast = parse(str);
  const componentName = path.split("/").pop()?.split(".")[0] ?? "MyComponent";
  return mapAstToMitosisJson(ast, componentName);
};
