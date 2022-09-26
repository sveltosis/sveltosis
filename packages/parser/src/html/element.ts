import { generate } from 'astring';
import { upperFirst } from 'lodash';
import { possiblyAppendPropertiesOrState as possiblyAppendPropertiesOrState } from '../helpers/bindings';
import { createMitosisNode } from '../helpers/mitosis-node';
import { filterChildren, parseChildren } from '../helpers/children';
import { insertAt } from '../helpers/string';

export function parseElement(json: SveltosisComponent, node: any) {
  const mitosisNode = createMitosisNode();
  mitosisNode.name = node.name;

  if (node.attributes?.length) {
    for (const attribute of node.attributes) {
      switch (attribute.type) {
        case 'Attribute': {
          switch (attribute.value[0]?.type) {
            case 'Text': {
              // if there are already conditional class declarations
              // add class names defined here to the bindings code as well
              if (attribute.name === 'class' && mitosisNode.bindings.class?.code?.length) {
                mitosisNode.bindings.class.code = insertAt(
                  mitosisNode.bindings.class.code,
                  `${attribute.value[0].data} `,
                  1,
                );
              } else {
                mitosisNode.properties[attribute.name] = attribute.value[0].data;
              }

              break;
            }
            case 'MustacheTag': {
              const binding = attribute.value[0].expression.name;

              mitosisNode.bindings[attribute.name] = {
                code: possiblyAppendPropertiesOrState(json, binding),
              };

              break;
            }
            case 'AttributeShorthand': {
              // e.g. <input {value}/>
              const binding = attribute.value[0].expression.name;
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
          mitosisNode.bindings._spread = {
            code: possiblyAppendPropertiesOrState(json, attribute.expression.name),
          };

          break;
        }
        case 'EventHandler': {
          let object = { code: '', arguments: [] };
          object =
            attribute.expression.type === 'ArrowTypeFunction'
              ? {
                  code: possiblyAppendPropertiesOrState(json, generate(attribute.expression.body)),
                  arguments: attribute.expression.arguments?.map((a: any) => a.name),
                }
              : {
                  code: possiblyAppendPropertiesOrState(json, generate(attribute.expression)),
                  arguments: [],
                };

          mitosisNode.bindings[`on${upperFirst(attribute.name)}`] = object;

          break;
        }
        case 'Binding': {
          const binding = attribute.expression.name;
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
          // conditional classes (e.g. class:disabled or class:disabled={disabled})
          const binding = possiblyAppendPropertiesOrState(
            json,
            `${generate(attribute.expression)} ? '${attribute.name}'  : ''`,
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

  const filteredChildren = filterChildren(node.children);

  if (filteredChildren.length === 1 && filteredChildren[0].type === 'RawMustacheTag') {
    mitosisNode.children = [];
    mitosisNode.bindings.innerHTML = {
      code: possiblyAppendPropertiesOrState(json, generate(filteredChildren[0].expression)),
    };
  } else {
    mitosisNode.children = parseChildren(json, node);
  }

  return mitosisNode;
}
