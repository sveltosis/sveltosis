export function parseProps(json: SveltosisComponent, node: any) {
  const declarations = node.declaration.declarations;

  if (declarations?.length) {
    const property = declarations[0].id.name;
    const propertyObject = {
      [property]: {
        default: declarations[0].init?.value,
      },
    };
    json.props = { ...json.props, ...propertyObject };

    json.defaultProps = Object.fromEntries(
      Object.keys(json.props)
        .filter((key) => json.props[key].default)
        .map((key) => [key, json.props[key].default]),
    );
  }
}
