import { sveltosis } from '@sveltosis/parser';
import { expect, test } from 'vitest';

const template = `
<script>
  let numbers = ['one', 'two', 'three'];
</script>

<ul>
  {#each numbers as num}
    <li>{num}</li>
  {/each}
</ul>`;

test('each', async () => {
  const json = await sveltosis(template);
});
