import { walk } from 'svelte/compiler';
import * as csstree from 'css-tree';
import { camelCase } from 'lodash';
import { MitosisNode } from '@builder.io/mitosis';

function bindTypeSelectorToNode(node: MitosisNode, block: string) {
  node.bindings.css = {
    code: block,
  };
}

function bindClassSelectorToNode(node: MitosisNode, block: string) {
  function appendToExisting(block: string) {
    return (
      node.bindings.css?.code.substring(0, node.bindings.css?.code.length - 1) + block.substring(1)
    );
  }

  node.bindings.css = {
    code: node.bindings.css?.code?.length ? appendToExisting(block) : block,
  };
}

function bindTypeSelector(children: MitosisNode[], selector: string, block: string) {
  children.forEach((node: MitosisNode) => {
    if (node.name === selector) {
      bindTypeSelectorToNode(node, block);
    }

    if (node.children?.length) {
      bindTypeSelector(node.children, selector, block);
    }
  });
}

function bindClassSelector(children: MitosisNode[], selector: string, block: string) {
  children.forEach((node: MitosisNode) => {
    if (node.properties?.class?.split(' ').includes(selector.substring(1))) {
      bindClassSelectorToNode(node, block);
    }

    if (node.children?.length) {
      bindClassSelector(node.children, selector, block);
    }
  });
}

export const parseCss = (ast: any, json: SveltosisComponent) => {
  walk(ast.css, {
    enter(node: any, parent: any) {
      if (node.type === 'Rule') {
        let selector = csstree.generate(node.prelude);
        let block: any = {};

        csstree.walk(node.block, {
          enter(node: any) {
            if (node.type === 'Value') {
              let firstChildNode = node.children[0];
              block[camelCase(parent.property)] = node.children
                .map((c: any) => csstree.generate(c))
                .join(' ');
            }
            parent = node;
          },
        });

        function objToString(obj: any) {
          return `{\n ${Object.entries(obj).reduce((str, [p, val]) => {
            return `${str}${p}: "${val}",\n `;
          }, '')} \n}`;
        }

        block = objToString(block);

        if (node.prelude.children[0]?.children[0]?.type === 'TypeSelector') {
          bindTypeSelector(json.children, selector, block);
        } else if (node.prelude.children[0]?.children[0]?.type === 'ClassSelector') {
          bindClassSelector(json.children, selector, block);
        }
        // todo: support .card > .input
        // todo: handle multiple blocks
      }
    },
  });
};
