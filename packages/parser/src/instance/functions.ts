import { generate } from 'astring';
import { possiblyAppendPropertiesOrState } from '../helpers/bindings';
import type { FunctionDeclaration, Identifier } from 'estree';

export function parseFunctions(json: SveltosisComponent, node: FunctionDeclaration) {
  const id = node.id as Identifier;
  json.state[id.name] = {
    code: possiblyAppendPropertiesOrState(json, generate(node)),
    type: 'function',
  };
}
