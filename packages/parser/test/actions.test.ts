import { sveltosis } from '@sveltosis/parser';
import { uniqueName } from '../src/helpers/string';
import { describe, expect, test } from 'vitest';
import { MitosisComponent } from '@builder.io/mitosis';

test('use:action', async () => {
  const json = await sveltosis(
    `
        <script>
            let buttonText = 'Click Me'

            function onClick(node, args) {
              console.log("Mounted", node)
              return {
                update() {
                  console.log("Updated", args)
                },
                destroy() {
                  console.log("Destroyed", node)
                }
              }
            }
        </script>

        <button use:onClick={buttonText}>{buttonText}</button>
    `,
    '',
  );

  const state = json?.state || ({} as MitosisComponent['state']);
  const references = json?.refs || ({} as MitosisComponent['refs']);
  const hooks = json?.hooks;

  const handlerName = uniqueName(Object.keys(state), 'actionHandler');
  const nodeReference = uniqueName(Object.keys(references), 'button');
  const argument = 'buttonText';
  const initHandler = `if (${nodeReference}) { state.${handlerName} = onClick(${nodeReference}, state.${argument}); };`;

  describe('handler and node references', () => {
    expect(state?.[handlerName]).toBeDefined();
    expect(references?.[nodeReference]).toBeDefined();
  });

  describe('onMount', () => {
    expect(hooks?.onMount).toBeDefined();
    expect(hooks?.onMount?.code).toContain(initHandler);
  });

  describe('onUpdate', () => {
    expect(hooks?.onUpdate).toBeDefined();
    expect(hooks?.onUpdate?.length).toEqual(2);

    const onDestroyAndRemount = hooks?.onUpdate?.[0];
    const onUpdate = hooks?.onUpdate?.[1];

    expect(onDestroyAndRemount?.code).toContain(initHandler);
    expect(onDestroyAndRemount?.code).toContain(`state.${handlerName}?.destroy()`);
    expect(onDestroyAndRemount?.deps).toContain(nodeReference);

    expect(onUpdate?.code).toContain(`state.${handlerName}?.update(state.${argument})`);
    expect(onUpdate?.deps).toContain(`state.${argument}`);
  });
});
