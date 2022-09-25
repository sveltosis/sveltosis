import { MitosisComponent } from "@builder.io/mitosis";

type Component = MitosisComponent & { props: any };

export function possiblyAppendPropsOrState(
  json: SveltosisComponent,
  input: string
) {
  let output = input;

  const propKeys = Object.keys(json.props);
  const stateKeys = Object.keys(json.state);

  propKeys.forEach((prop) => {
    let regex = new RegExp(`(props\.)?${prop}\\b`, "g");
    if (regex.test(output)) {
      output = output.replace(regex, `props.${prop}`);
    }
  });

  stateKeys.forEach((state) => {
    let regex = new RegExp(`(state\.)?${state}\\b`, "g");
    if (regex.test(output)) {
      output = output.replace(regex, `state.${state}`);
    }
  });

  return output;
}
