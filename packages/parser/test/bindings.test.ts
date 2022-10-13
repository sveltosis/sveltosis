import { sveltosis } from '@sveltosis/parser';
import { expect, test } from 'vitest';

test('bind:group', async () => {
  const json = await sveltosis(
    `
        <script>
            let tortilla = 'Plain';
        </script>

        <input type="radio" bind:group={tortilla} value="Plain">
        <input type="radio" bind:group={tortilla} value="Whole wheat">
        <input type="radio" bind:group={tortilla} value="Spinach">
    `,
    '',
  );
  const bindings = json?.children[0].children[0].bindings;
  const properties = json?.children[0].children[0].properties;

  expect(bindings?.onChange).toBeDefined();
  expect(bindings?.onChange?.code).toEqual('state.tortilla = event.target.value');

  expect(bindings?.checked).toBeDefined();
  expect(bindings?.checked?.code).toEqual("state.tortilla === 'Plain'");

  expect(properties?.type).toBeDefined();
  expect(properties?.type).toBe('radio');
});

test('bind:group checkbox', async () => {
  const json = await sveltosis(
    `
          <script>
            let fillings = [];
          </script>
  
          <input type="checkbox" bind:group={fillings} value="Rice">
          <input type="checkbox" bind:group={fillings} value="Beans">
          <input type="checkbox" bind:group={fillings} value="Cheese">
          <input type="checkbox" bind:group={fillings} value="Guac (extra)">
      `,
  );
  const bindings = json?.children[0].children[0].bindings;

  expect(bindings?.onChange?.code).toEqual(
    "event.target.checked ? state.fillings.push(event.target.value) : state.fillings.splice(state.fillings.indexOf('Rice'), 1)",
  );

  expect(bindings?.checked).toBeDefined();
  expect(bindings?.checked?.code).toEqual("state.fillings.includes('Rice')");
});

test('bind:property', async () => {
  const json = await sveltosis(
    `
    <script>
        let value = 'hello';
    </script>

    <input {value} />
`,
  );

  const bindings = json?.children[0].bindings;

  expect(json?.state.value).toBeDefined();
  expect(json?.state.value?.code).toBe('hello');
  expect(json?.state.value?.type).toBe('property');

  expect(bindings?.value).toBeDefined();
  expect(bindings?.value?.code).toEqual('state.value');
});

test('bind:this', async () => {
  const json = await sveltosis(
    `
    <script>
        let ref = '';
    </script>
    
    <input bind:this={ref} />
    `,
  );

  expect(json?.refs.ref).toBeDefined();

  expect(json?.children[0].bindings.ref).toBeDefined();
  expect(json?.children[0].bindings.ref?.code).toEqual('ref');
});
