import { walk } from 'svelte/compiler';
import * as csstree from 'css-tree';
import { camelCase } from 'lodash';
import { MitosisNode } from '@builder.io/mitosis';
import { Ast, Style } from 'svelte/types/compiler/interfaces';
import { BaseNode } from 'estree';

function bindTypeSelectorToNode(node: MitosisNode, block: string) {
  node.bindings.css = {
    code: block,
  };
}

function bindClassSelectorToNode(node: MitosisNode, block: string) {
  function appendToExisting(block: string) {
    return (
      node.bindings.css?.code.slice(0, Math.max(0, node.bindings.css?.code.length - 1)) +
      block.slice(1)
    );
  }

  node.bindings.css = {
    code: node.bindings.css?.code?.length ? appendToExisting(block) : block,
  };
}

function bindTypeSelector(children: MitosisNode[], selector: string, block: string) {
  for (const node of children) {
    if (node.name === selector) {
      bindTypeSelectorToNode(node, block);
    }

    if (node.children?.length) {
      bindTypeSelector(node.children, selector, block);
    }
  }
}

function bindClassSelector(children: MitosisNode[], selector: string, block: string) {
  for (const node of children) {
    if (node.properties?.class?.split(' ').includes(selector.slice(1))) {
      bindClassSelectorToNode(node, block);
    }

    if (node.children?.length) {
      bindClassSelector(node.children, selector, block);
    }
  }
}

function objectToString(object: Record<string, string>) {
  let string_ = '';

  for (const [p, value] of Object.entries(object)) {
    string_ = `${string_}${p}: "${value}",\n `;
  }

  return `{\n ${string_} \n}`;
}

export const parseCss = (ast: Ast, json: SveltosisComponent) => {
  walk(ast.css as BaseNode, {
    enter(node, parent) {
      const cssNode = node as Style;
      const cssParentNode = parent as Style;

      if (node.type === 'Rule') {
        const selector = csstree.generate(cssNode.prelude);
        const block: Record<string, string> = {};

        csstree.walk(cssNode.block, {
          enter(node: csstree.CssNode) {
            if (node.type === 'Value') {
              block[camelCase(cssParentNode.property)] = cssNode.children
                .map((c) => csstree.generate(c))
                .join(' ');
            }
            parent = node;
          },
        });

        const blockString = objectToString(block);

        if (cssNode.prelude.children[0]?.children[0]?.type === 'TypeSelector') {
          bindTypeSelector(json.children, selector, blockString);
        } else if (cssNode.prelude.children[0]?.children[0]?.type === 'ClassSelector') {
          bindClassSelector(json.children, selector, blockString);
        }
        // todo: support .card > .input
        // todo: handle multiple blocks
      }
    },
  });
};
