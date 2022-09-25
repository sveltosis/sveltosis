import { generate } from "astring";
import { possiblyAppendPropsOrState } from "../helpers/bindings";

export function parseRefs(json: SveltosisComponent, node: any) {
  const declaration = node.declarations[0];

  let code = possiblyAppendPropsOrState(json, generate(declaration.init));

  json.state[declaration.id.name] = {
    code,
    type: "property",
  };
}
