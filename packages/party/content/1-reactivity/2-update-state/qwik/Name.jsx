import { Fragment, component$, h, useClientEffect$, useStore } from '@builder.io/qwik';
export const Name = component$((props) => {
  const state = useStore({ name: 'John' });
  useClientEffect$(() => {
    state.name = 'Jane';
  });
  return <h1>Hello {state.name}</h1>;
});
export default Name;
