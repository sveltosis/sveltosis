import { walk } from 'svelte/compiler';

import { parseImports } from './imports';
import { parseProperties } from './properties';
import { parseFunctions } from './functions';
import { parseGetContext, parseSetContext } from './context';
import { parseReferences } from './references';
import { parseReactive } from './reactive';
import { parseAfterUpdate, parseOnDestroy, parseOnMount } from './hooks';

import type { Ast } from 'svelte/types/compiler/interfaces';
import type {
  BaseNode,
  ImportDeclaration,
  ExportNamedDeclaration,
  ExpressionStatement,
  FunctionDeclaration,
  VariableDeclaration,
  LabeledStatement,
  Identifier,
} from 'estree';

type InstanceHandler<T = BaseNode> = (json: SveltosisComponent, node: T) => void;

const handleImportDeclaration: InstanceHandler<ImportDeclaration> = (json, node) => {
  parseImports(json, node as ImportDeclaration);
};

const handleExportNamedDeclaration: InstanceHandler<ExportNamedDeclaration> = (json, node) => {
  parseProperties(json, node);
};

const handleExpressionStatement: InstanceHandler<ExpressionStatement> = (json, node) => {
  if (node.expression.type !== 'CallExpression') {
    return;
  }

  const callee = node.expression.callee as Identifier;

  switch (callee.name) {
    case 'setContext': {
      parseSetContext(json, node);
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
};

const handleFunctionDeclaration: InstanceHandler<FunctionDeclaration> = (json, node) => {
  parseFunctions(json, node);
};

const handleVariableDeclaration: InstanceHandler<VariableDeclaration> = (json, node) => {
  const init = node.declarations[0]?.init;

  if (init?.type === 'CallExpression' && (init?.callee as Identifier)?.name === 'getContext') {
    parseGetContext(json, node);
  } else {
    parseReferences(json, node);
  }
};

const handleLabeledStatement: InstanceHandler<LabeledStatement> = (json, node) => {
  if (node.label.name === '$') {
    parseReactive(json, node);
  }
};

export function parseInstance(ast: Ast, json: SveltosisComponent) {
  walk(ast.instance as BaseNode, {
    enter(node, parent) {
      switch (node.type) {
        case 'ImportDeclaration':
          handleImportDeclaration(json, node as ImportDeclaration);
          break;
        case 'ExportNamedDeclaration':
          handleExportNamedDeclaration(json, node as ExportNamedDeclaration);
          break;
        case 'ExpressionStatement':
          handleExpressionStatement(json, node as ExpressionStatement);
          break;
        case 'FunctionDeclaration':
          handleFunctionDeclaration(json, node as FunctionDeclaration);
          break;
        case 'VariableDeclaration':
          parent.type === 'Program' && handleVariableDeclaration(json, node as VariableDeclaration);
          break;
        case 'LabeledStatement':
          handleLabeledStatement(json, node as LabeledStatement);
      }
    },
  });
}
