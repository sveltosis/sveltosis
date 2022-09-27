import { generate } from 'astring';
import type { BaseNode, IfStatement } from 'estree';
import { possiblyAppendPropertiesOrState } from '../helpers/bindings';

export function parseIfStatement(json: SveltosisComponent, node: IfStatement) {
  const ifStatement = possiblyAppendPropertiesOrState(json, generate(node));
  if (json.hooks.onInit?.code.length) {
    json.hooks.onInit.code += `\n ${ifStatement}`;
  } else {
    json.hooks.onInit = {
      code: ifStatement,
    };
  }
}
