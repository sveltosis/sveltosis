import { generate } from 'astring';
import { upperFirst } from 'lodash';
import { possiblyAppendPropertiesOrState as possiblyAppendPropertiesOrState } from '../helpers/bindings';
import { createMitosisNode } from '../helpers/mitosis-node';
import { filterChildren, parseChildren } from '../helpers/children';

export function parseElement(json: SveltosisComponent, node: any) {
  const mitosisNode = createMitosisNode();
  mitosisNode.name = node.name;

  if (node.attributes?.length) {
    node.attributes.forEach((attribute: any) => {
      switch (attribute.type) {
        case 'Attribute': {
          switch (attribute.value[0]?.type) {
            case 'Text': {
              mitosisNode.properties[attribute.name] = attribute.value[0].data;

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
        // No default
      }
    });
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
