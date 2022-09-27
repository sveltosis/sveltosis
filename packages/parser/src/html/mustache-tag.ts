import { generate } from 'astring';
import type { TemplateNode } from 'svelte/types/compiler/interfaces';
import { possiblyAppendPropertiesOrState as possiblyAppendPropertiesOrState } from '../helpers/bindings';
import { createMitosisNode } from '../helpers/mitosis-node';

export function parseMustacheTag(json: SveltosisComponent, node: TemplateNode) {
  const mitosisNode = createMitosisNode();
  mitosisNode.name = 'div';
  mitosisNode.bindings['_text'] = {
    code: possiblyAppendPropertiesOrState(json, generate(node.expression)),
  };
  return mitosisNode;
}

export function parseRawMustacheTag(json: SveltosisComponent, node: TemplateNode) {
  const mitosisNode = createMitosisNode();
  mitosisNode.name = 'div';
  mitosisNode.bindings.innerHTML = {
    code: possiblyAppendPropertiesOrState(json, generate(node.expression)),
  };
  return mitosisNode;
}
