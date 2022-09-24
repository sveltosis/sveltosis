import { generate } from "astring";
import { upperFirst } from "lodash";
import { possiblyAppendPropsOrState } from "../helpers/bindings";
import { createMitosisNode } from "../helpers/mitosis-node";
import { filterChildren, parseChildren } from "../helpers/children";

export function parseElement(json: SveltosisComponent, node: any) {
  let mitosisNode = createMitosisNode();
  mitosisNode.name = node.name;

  if (node.attributes?.length) {
    node.attributes.forEach((attr: any) => {
      if (attr.type === "Attribute") {
        if (attr.value[0]?.type === "Text") {
          mitosisNode.properties[attr.name] = attr.value[0].data;
        } else if (attr.value[0]?.type === "MustacheTag") {
          const binding = attr.value[0].expression.name;

          mitosisNode.bindings[attr.name] = {
            code: possiblyAppendPropsOrState(json, binding),
          };
        } else if (attr.value[0]?.type === "AttributeShorthand") {
          // e.g. <input {value}/>
          let binding = attr.value[0].expression.name;
          mitosisNode.bindings[binding] = {
            code: possiblyAppendPropsOrState(json, binding),
          };
        }
      } else if (attr.type === "Spread") {
        mitosisNode.bindings._spread = {
          code: possiblyAppendPropsOrState(json, attr.expression.name),
        };
      } else if (attr.type === "EventHandler") {
        let obj = { code: "", arguments: [] };
        if (attr.expression.type === "ArrowTypeFunction") {
          obj = {
            code: possiblyAppendPropsOrState(
              json,
              generate(attr.expression.body)
            ),
            arguments: attr.expression.arguments?.map((a: any) => a.name),
          };
        } else {
          obj = {
            code: possiblyAppendPropsOrState(json, generate(attr.expression)),
            arguments: [],
          };
        }

        mitosisNode.bindings[`on${upperFirst(attr.name)}`] = obj;
      } else if (attr.type === "Binding") {
        const binding = attr.expression.name;
        mitosisNode.bindings[attr.name] = {
          code: possiblyAppendPropsOrState(json, binding),
        };

        mitosisNode.bindings["onChange"] = {
          code: `state.${attr.expression.name} = event.target.value`,
          arguments: ["event"],
        };
      }
    });
  }

  const filteredChildren = filterChildren(node.children);

  if (
    filteredChildren.length === 1 &&
    filteredChildren[0].type === "RawMustacheTag"
  ) {
    mitosisNode.children = [];
    mitosisNode.bindings.innerHTML = {
      code: possiblyAppendPropsOrState(
        json,
        generate(filteredChildren[0].expression)
      ),
    };
  } else {
    mitosisNode.children = parseChildren(json, node);
  }

  return mitosisNode;
}
