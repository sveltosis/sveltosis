import { generate } from 'astring';
import type { CallExpression, FunctionDeclaration, Identifier } from 'estree';
import { capitalize } from 'lodash';
import { walk } from 'svelte/compiler';
import { stripQuotes } from '../helpers/string';

export function parseFunctions(json: SveltosisComponent, node: FunctionDeclaration) {
  const id = node.id as Identifier;

  const arguments_ = node.params?.map((parameter) => generate(parameter)) ?? [];

  let dispatchEventName;

  walk(node, {
    enter(node) {
      switch (node.type) {
        case 'CallExpression': {
          const node_ = node as CallExpression;
          const callee = node_.callee as Identifier;

          if (callee?.name === 'dispatch') {
            const event = generate(node_.arguments[0]);
            dispatchEventName = event;
          }
          break;
        }
      }
    },
  });

  let code = generate(node);

  if (dispatchEventName) {
    const regex = new RegExp(`dispatch\\(${dispatchEventName},?`);
    code = code.replace(regex, `props.on${capitalize(stripQuotes(dispatchEventName))}(`);
  }

  json.state[id.name] = {
    arguments: arguments_,
    code,
    type: 'function',
  };
}
