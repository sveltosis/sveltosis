import { generate } from 'astring';
import { possiblyAppendPropertiesOrState, preventNameCollissions } from '../helpers/bindings';
import type { FunctionDeclaration, Identifier } from 'estree';

export function parseFunctions(json: SveltosisComponent, node: FunctionDeclaration) {
  const id = node.id as Identifier;

  const arguments_ = node.params?.map((parameter) => generate(parameter)) ?? [];

  json.state[id.name] = {
    code: possiblyAppendPropertiesOrState(
      json,
      preventNameCollissions(json, generate(node), arguments_),
    ),
    type: 'function',
  };
}
