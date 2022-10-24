import { Fragment, component$, h, useStore } from "@builder.io/qwik";
export const ClassDirective = component$((props) => {
  const state = useStore({ focus: true });
  return (
    <input
      class={`form-input ${props.disabled ? "props.disabled" : ""} ${
        state.focus ? "state.focus" : ""
      }`}
    ></input>
  );
});
export default ClassDirective;
