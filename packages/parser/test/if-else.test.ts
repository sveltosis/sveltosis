import { MitosisNode } from '@builder.io/mitosis';
import { sveltosis } from '@sveltosis/parser';
import { expect, test } from 'vitest';

const template = `
<script>
  let x = 17
</script>

{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}
`;

test('if / else', async () => {
  const json = await sveltosis(template, '');

  const node = json?.children[0];

  expect(node?.name).toEqual('Show');
  expect(node?.bindings.when).toBeDefined();
  expect(node?.bindings.when?.code).toEqual('state.x > 10');

  expect(node?.meta.else).toBeDefined();
  expect((node?.meta.else as MitosisNode)?.meta?.else).toBeDefined();
  expect((node?.meta.else as MitosisNode)?.bindings?.when).toBeDefined();
  expect((node?.meta.else as MitosisNode)?.bindings?.when?.code).toEqual('5 > state.x');
});
