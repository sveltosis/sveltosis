export function possiblyAppendPropertiesOrState(json: SveltosisComponent, input: string) {
  let output = input;

  const propertyKeys = Object.keys(json.props);
  const stateKeys = Object.keys(json.state);

  // todo: we are currently also replacing name in the log string
  // and we probably want to avoid this
  // if (name) { console.log('has a name') }

  for (const property of propertyKeys) {
    const regex = new RegExp(`(props.)?${property}\\b`, 'g');
    if (regex.test(output)) {
      output = output.replace(regex, `props.${property}`);
    }
  }

  for (const state of stateKeys) {
    const regex = new RegExp(`(state.)?${state}\\b`, 'g');
    if (regex.test(output)) {
      output = output.replace(regex, `state.${state}`);
    }
  }

  return output;
}
