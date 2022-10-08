import { sveltosis } from '@sveltosis/parser';
import { expect, test } from 'vitest';

const template = `
<script>
  import { getContext, setContext } from 'svelte';

  let activeTab = 0;

  let disabled = getContext('disabled');

  setContext('activeTab', activeTab)
</script>

<div>
  {activeTab}
</div>
`;

test('context:get', async () => {
  const json = await sveltosis(template, '');

  expect(json?.context.get.disabled).toBeDefined();
  expect(json?.context.get.disabled.name).toEqual("'disabled'");
});

test('context:set', async () => {
  const json = await sveltosis(template, '');

  expect(json?.context.set.activeTab).toBeDefined();
  expect(json?.context.set.activeTab.ref).toEqual('state.activeTab');
});
