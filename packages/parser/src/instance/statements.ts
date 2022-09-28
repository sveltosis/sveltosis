import { generate } from 'astring';
import type { Statement } from 'estree';
import { possiblyAppendPropertiesOrState } from '../helpers/bindings';

function addToOnInitHook(json: SveltosisComponent, code: string) {
  if (json.hooks.onInit?.code.length) {
    json.hooks.onInit.code += `\n ${code}`;
  } else {
    json.hooks.onInit = {
      code,
    };
  }
}

export function parseStatementAtProgramLevel(json: SveltosisComponent, node: Statement) {
  const statement = possiblyAppendPropertiesOrState(json, generate(node));
  addToOnInitHook(json, statement);
}
