import { generate } from 'astring';
import type { Statement } from 'estree';

import { addToOnInitHook } from '../helpers/hooks';
import { possiblyAppendPropertiesOrState } from '../helpers/bindings';

export function parseStatementAtProgramLevel(json: SveltosisComponent, node: Statement) {
  const statement = possiblyAppendPropertiesOrState(json, generate(node));
  addToOnInitHook(json, statement);
}
