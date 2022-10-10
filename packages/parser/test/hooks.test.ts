import { sveltosis } from '@sveltosis/parser';
import { expect, test } from 'vitest';

const template = `
<script>
  import { onMount, onDestroy, onAfterUpdate } from 'svelte';

  onMount(() => {
    console.log('onMount');
  });

  onDestroy(() => {
    console.log('onDestroy');
  });

  onAfterUpdate(() => {
    console.log('onAfterUpdate');
  });
</script>
    `;

test('hooks:onMount', async () => {
  const json = await sveltosis(template, '');
  expect(json?.hooks.onMount?.code).toEqual("\n  console.log('onMount');\n");
});

test('hooks:onDestroy', async () => {
  const json = await sveltosis(template, '');
  expect(json?.hooks.onUnMount?.code).toEqual("\n  console.log('onDestroy');\n");
});

test('hooks:onAfterUpdate', async () => {
  const json = await sveltosis(template, '');
  expect(json?.hooks.onUpdate?.length || 0).toBeGreaterThan(0);
  expect(json?.hooks.onUpdate && json.hooks.onUpdate[0].code).toEqual(
    "\n  console.log('onAfterUpdate');\n",
  );
});
