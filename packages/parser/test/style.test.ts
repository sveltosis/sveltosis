import { sveltosis } from '@sveltosis/parser';
import { expect, test } from 'vitest';

const styleString = `input { font-size: 12px; } \n .form-input:focus { outline: 1px solid blue;} `;

test('style', async () => {
  const json = await sveltosis(`<style>${styleString}</style>`, '');
  expect(json?.style).equal(styleString);
});
