import { Fragment, component$, h, useStore } from "@builder.io/qwik";
export const PickPill = component$((props) => {
  const state = useStore({ picked: "red" });
  return (
    <Fragment>
      <div>Picked: {state.picked}</div>
      <input
        id="blue-pill"
        type="radio"
        value="blue"
        checked={(() => {
          state.picked === "blue";
        })()}
        onChange$={(event) => (state.picked = event.target.value)}
      ></input>
      <label for="blue-pill">Blue pill</label>
      <input
        id="red-pill"
        type="radio"
        value="red"
        checked={(() => {
          state.picked === "red";
        })()}
        onChange$={(event) => (state.picked = event.target.value)}
      ></input>
      <label for="red-pill">Red pill</label>
    </Fragment>
  );
});
export default PickPill;
