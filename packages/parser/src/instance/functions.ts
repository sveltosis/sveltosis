import { generate } from 'astring';
import { possiblyAppendPropsOrState } from '../helpers/bindings';

export function parseFunctions(json: SveltosisComponent, node: any) {
  json.state[node.id.name] = {
    code: possiblyAppendPropsOrState(json, generate(node)),
    type: 'function',
  };
}
