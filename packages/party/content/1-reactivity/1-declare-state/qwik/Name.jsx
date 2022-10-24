import { Fragment, component$, h, useStore } from "@builder.io/qwik";
export const Name = component$((props) => {
  const state = useStore({ name: "John" });
  return <h1>Hello {state.name}</h1>;
});
export default Name;
