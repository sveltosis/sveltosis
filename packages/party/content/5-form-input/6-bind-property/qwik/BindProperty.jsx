import { Fragment, component$, h, useStore } from "@builder.io/qwik";
export const BindProperty = component$((props) => {
  const state = useStore({ value: "hello" });
  return (
    <input
      onChange$={(event) => (state.value = event.target.state.value)}
      value={state.value}
    ></input>
  );
});
export default BindProperty;
