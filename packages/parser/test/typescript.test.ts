import { sveltosis } from '@sveltosis/parser';
import { expect, test } from 'vitest';

test('typescript props', async () => {
  const json = await sveltosis(
    `
    <script lang="ts">
        export let compiler: string = 'Svelte';
        export let language: string = 'Typescript';
        export let version: number = 1;
        export let tag: string | undefined;
    </script>
  
    <div></div>`,
  );

  expect(json?.propsTypeRef).toBeDefined();
  expect(json?.propsTypeRef).toEqual('Props');

  expect(json?.types?.length).toEqual(1);
  expect(json?.types && json.types[0]).toContain('compiler: string');
  expect(json?.types && json.types[0]).toContain('language: string');
  expect(json?.types && json.types[0]).toContain('version: number');
  expect(json?.types && json.types[0]).toContain('tag: string | undefined');
});

test('typescript types', async () => {
  const json = await sveltosis(
    `
    <script lang="ts">
        type Person = {
          name: string;
          age: number;
        }

        export let person: Person;
    </script>
  
    <div></div>`,
  );

  expect(json?.propsTypeRef).toBeDefined();
  expect(json?.propsTypeRef).toEqual('Props');

  expect(json?.types?.length).toEqual(2);
  expect(json?.types && json.types[0]).toContain('name: string');
  expect(json?.types && json.types[0]).toContain('age: number');
  expect(json?.types && json.types[1]).toContain('Props');
  expect(json?.types && json.types[1]).toContain('person: Person');
});

test('typescript interface', async () => {
  const json = await sveltosis(
    `
    <script lang="ts">
        interface Person {
          name: string;
          age: number;
        }

        export let person: Person;
    </script>
  
    <div></div>`,
  );

  expect(json?.propsTypeRef).toBeDefined();
  expect(json?.propsTypeRef).toEqual('Props');

  expect(json?.types?.length).toEqual(2);
  expect(json?.types && json.types[0]).toContain('name: string');
  expect(json?.types && json.types[0]).toContain('age: number');
  expect(json?.types && json.types[1]).toContain('Props');
  expect(json?.types && json.types[1]).toContain('person: Person');
});
