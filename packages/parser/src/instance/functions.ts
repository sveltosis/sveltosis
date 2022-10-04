import { generate } from 'astring';
import type { FunctionDeclaration, Identifier } from 'estree';

export function parseFunctions(json: SveltosisComponent, node: FunctionDeclaration) {
  const id = node.id as Identifier;

  const arguments_ = node.params?.map((parameter) => generate(parameter)) ?? [];

  json.state[id.name] = {
    // code: preventNameCollissions(json, generate(node), arguments_),
    arguments: arguments_,
    code: generate(node),
    type: 'function',
  };
}
