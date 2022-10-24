import { Fragment, component$, h, useStore } from "@builder.io/qwik";
export const IsAvailable = component$((props) => {
  const state = useStore({ isAvailable: false });
  return (
    <Fragment>
      <input
        id="is-available"
        type="checkbox"
        onChange$={(event) => (state.isAvailable = event.target.checked)}
        checked={state.isAvailable}
      ></input>
      <label for="is-available">Is available</label>
    </Fragment>
  );
});
export default IsAvailable;
