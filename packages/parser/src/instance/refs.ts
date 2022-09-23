export function parseRefs(json: SveltosisComponent, node: any) {
  const declaration = node.declarations[0];
  json.state[declaration.id.name] = {
    code: declaration.init.value,
    type: "property",
  };
}
