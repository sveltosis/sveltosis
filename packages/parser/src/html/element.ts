import { generate } from 'astring';
import { upperFirst } from 'lodash';
import { possiblyAppendPropertiesOrState } from '../helpers/bindings';
import { createMitosisNode } from '../helpers/mitosis-node';
import { filterChildren, parseChildren } from '../helpers/children';
import { insertAt } from '../helpers/string';

import type { TemplateNode, Element, Text, MustacheTag } from 'svelte/types/compiler/interfaces';
import type { Identifier, ArrowFunctionExpression, BaseCallExpression, Node } from 'estree';

interface AttributeShorthand {
  type: 'AttributeShorthand';
  expression: Identifier;
}

export function parseElement(json: SveltosisComponent, node: TemplateNode) {
  const mitosisNode = createMitosisNode();
  mitosisNode.name = node.name;

  if (node.attributes?.length) {
    for (const attribute of node.attributes as Element['attributes']) {
      switch (attribute.type) {
        case 'Attribute': {
          switch (attribute.value[0]?.type) {
            case 'Text': {
              const value: Text = attribute.value[0];
              // if there are already conditional class declarations
              // add class names defined here to the bindings code as well
              if (attribute.name === 'class' && mitosisNode.bindings.class?.code?.length) {
                mitosisNode.bindings.class.code = insertAt(
                  mitosisNode.bindings.class.code,
                  `${value.data} `,
                  1,
                );
              } else {
                mitosisNode.properties[attribute.name] = value.data;
              }

              break;
            }
            case 'MustacheTag': {
              const value: MustacheTag = attribute.value[0];
              const expression = value.expression as Identifier;
              const binding = expression.name;

              mitosisNode.bindings[attribute.name] = {
                code: possiblyAppendPropertiesOrState(json, binding),
              };

              break;
            }
            case 'AttributeShorthand': {
              // e.g. <input {value}/>
              const value: AttributeShorthand = attribute.value[0];
              const binding = value.expression.name;
              mitosisNode.bindings[binding] = {
                code: possiblyAppendPropertiesOrState(json, binding),
              };

              break;
            }
            // No default
          }

          break;
        }
        case 'Spread': {
          const expression = attribute.expression as Identifier;
          mitosisNode.bindings._spread = {
            code: possiblyAppendPropertiesOrState(json, expression.name),
          };

          break;
        }
        case 'EventHandler': {
          let object: { code: string; arguments: string[] } = { code: '', arguments: [] };

          if (attribute.expression.type === 'ArrowTypeFunction') {
            const expression = attribute.expression as ArrowFunctionExpression;

            object = {
              code: possiblyAppendPropertiesOrState(json, generate(expression.body)),
              arguments: (expression.body as BaseCallExpression)?.arguments?.map(
                (a) => (a as Identifier).name,
              ),
            };
          } else {
            object = {
              code: possiblyAppendPropertiesOrState(json, generate(attribute.expression)),
              arguments: [],
            };
          }

          mitosisNode.bindings[`on${upperFirst(attribute.name)}`] = object;

          break;
        }
        case 'Binding': {
          const expression = attribute.expression as Identifier;
          const binding = expression.name;
          mitosisNode.bindings[attribute.name] = {
            code: possiblyAppendPropertiesOrState(json, binding),
          };

          mitosisNode.bindings['onChange'] = {
            code: `state.${attribute.expression.name} = event.target.value`,
            arguments: ['event'],
          };

          break;
        }
        case 'Class': {
          const expression = attribute.expression as Node;

          // conditional classes (e.g. class:disabled or class:disabled={disabled})
          const binding = possiblyAppendPropertiesOrState(
            json,
            `${generate(expression)} ? '${attribute.name}'  : ''`,
          );

          let code = '';

          // if there are existing class declarations
          // add them here instead and remove them from properties
          // to avoid duplicate class declarations in certain frameworks
          if (mitosisNode.properties?.class?.length) {
            code = `${mitosisNode.properties.class} `;
            delete mitosisNode.properties.class;
          }

          // if class code is already defined (meaning there is more than 1 conditional class declaration)
          // append it to the string instead instead of assigning it
          if (
            mitosisNode.bindings.class &&
            Object.prototype.hasOwnProperty.call(mitosisNode.bindings.class, 'code') &&
            mitosisNode.bindings.class?.code.length
          ) {
            code = insertAt(
              mitosisNode.bindings.class.code,
              ' ${' + binding + '}',
              mitosisNode.bindings.class.code.length - 1,
            );
            mitosisNode.bindings.class = {
              code,
            };
          } else {
            // otherwise just assign
            code = '`' + code + '${' + binding + '}`';
            mitosisNode.bindings.class = {
              code,
            };
          }
        }
        // No default
      }
    }
  }

  let filteredChildren: TemplateNode[] = [];

  if (node.children) {
    filteredChildren = filterChildren(node.children);
  }

  if (filteredChildren.length === 1 && filteredChildren[0].type === 'RawMustacheTag') {
    const child = filteredChildren[0] as MustacheTag;

    mitosisNode.children = [];
    mitosisNode.bindings.innerHTML = {
      code: possiblyAppendPropertiesOrState(json, generate(child.expression)),
    };
  } else {
    mitosisNode.children = parseChildren(json, node);
  }

  return mitosisNode;
}
