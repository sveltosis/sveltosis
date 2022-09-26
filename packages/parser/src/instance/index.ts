import { walk } from 'svelte/compiler';

import { parseImports } from './imports';
import { parseProperties } from './properties';
import { parseFunctions } from './functions';
import { parseGetContext, parseSetContext } from './context';
import { parseReferences } from './references';
import { parseReactive } from './reactive';
import { parseAfterUpdate, parseOnDestroy, parseOnMount } from './hooks';

export function parseInstance(ast: any, json: SveltosisComponent) {
  walk(ast.instance, {
    enter(node: any, parent: any) {
      if (node.type === 'ImportDeclaration') {
        parseImports(json, node);
      } else if (node.type === 'ExportNamedDeclaration') {
        parseProperties(json, node);
      } else if (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression') {
        const calleeName: string = node.expression.callee.name;
        switch (calleeName) {
          case 'setContext': {
            parseSetContext(json, node, parent, this);
            break;
          }
          case 'onMount': {
            parseOnMount(json, node);
            break;
          }
          case 'onDestroy': {
            parseOnDestroy(json, node);
            break;
          }
          case 'onAfterUpdate': {
            parseAfterUpdate(json, node);
            break;
          }
          // No default
        }
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
