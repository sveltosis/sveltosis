import { walk } from 'svelte/compiler';

import { parseImports } from './imports';
import { parseProps as parseProperties } from './props';
import { parseFunctions } from './functions';
import { parseGetContext, parseSetContext } from './context';
import { parseRefs as parseReferences } from './refs';
import { parseReactive } from './reactive';

export function parseInstance(ast: any, json: SveltosisComponent) {
  walk(ast.instance, {
    enter(node: any, parent: any) {
      if (node.type === 'ImportDeclaration') {
        parseImports(json, node);
      } else if (node.type === 'ExportNamedDeclaration') {
        parseProperties(json, node);
      } else if (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression') {
        parseSetContext(json, node, parent, this);
      } else if (node.type === 'FunctionDeclaration') {
        parseFunctions(json, node);
      } else if (
        node.type === 'VariableDeclaration' &&
        parent.type === 'Program' &&
        node.declarations.length > 0
      ) {
        if (
          node.declarations[0]?.init?.type === 'CallExpression' &&
          node.declarations[0]?.init?.callee?.name === 'getContext'
        ) {
          parseGetContext(json, node);
        } else {
          parseReferences(json, node);
        }
      } else if (node.type === 'LabeledStatement' && node.label.name === '$') {
        parseReactive(json, node);
      }
    },
  });
}
