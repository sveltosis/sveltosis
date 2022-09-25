import { generate } from 'astring';
import { possiblyAppendPropsOrState as possiblyAppendPropertiesOrState } from '../helpers/bindings';

export function parseFunctions(json: SveltosisComponent, node: any) {
  json.state[node.id.name] = {
    code: possiblyAppendPropertiesOrState(json, generate(node)),
    type: 'function',
  };
}
