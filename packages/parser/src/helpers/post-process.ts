import { MitosisNode } from '@builder.io/mitosis';

export function preventNameCollissions(
  json: SveltosisComponent,
  input: string,
  arguments_: any[],
  prepend = '',
  append = '_',
) {
  let output = input;

  const keys = [...Object.keys(json.props), ...Object.keys(json.state)];

  for (const key of keys) {
    if (arguments_.includes(key)) {
      const regex = new RegExp(`${key}\\b`, 'g');
      if (regex.test(output)) {
        output = output.replace(regex, `${prepend}${key}${append}`);
      }
    }
  }

  return output;
}

function prependProperties(json: SveltosisComponent, input: string) {
  let output = input;

  const propertyKeys = Object.keys(json.props);

  for (const property of propertyKeys) {
    const regex = new RegExp(`(props.)?${property}\\b`, 'g');
    if (regex.test(output)) {
      output = output.replace(regex, `props.${property}`);
    }
  }
  return output;
}

function prependState(json: SveltosisComponent, input: string) {
  let output = input;
  const stateKeys = Object.keys(json.state);
  for (const state of stateKeys) {
    const regex = new RegExp(`^(state.)${state}\\b`, 'g');
    if (regex.test(output)) {
      output = output.replace(regex, `state.${state}`);
    }
  }
  return output;
}

function addPropertiesAndState(json: SveltosisComponent, input: string) {
  let output = input;
  output = prependProperties(json, output);
  output = prependState(json, output);
  return output;
}

async function addPropertiesAndStateToNode(json: SveltosisComponent, node: MitosisNode) {
  for (const key of Object.keys(node.bindings)) {
    if (Object.prototype.hasOwnProperty.call(node.bindings, key)) {
      node.bindings[key] = {
        code: addPropertiesAndState(json, node.bindings[key]?.code ?? ''),
        arguments: node.bindings[key]?.arguments ?? undefined,
      };
    }
  }
}

function addPropertiesAndStatesToChildren(json: SveltosisComponent, children: MitosisNode[]) {
  for (const node of children) {
    addPropertiesAndStateToNode(json, node);

    if (node.children?.length) {
      addPropertiesAndStatesToChildren(json, node.children);
    }
  }
}

export function postProcess(json: SveltosisComponent) {
  // Call preventNameCollissions here, before the rest (where it applies -- function arguments for now)

  // State (everything except type === 'property')

  // Children
  addPropertiesAndStatesToChildren(json, json.children);

  // Hooks

  // Context
  for (const key of Object.keys(json.context.set)) {
    if (json.context.set[key]?.ref) {
      json.context.set[key].ref = addPropertiesAndState(json, json.context.set[key].ref as string);
    }
  }
}
