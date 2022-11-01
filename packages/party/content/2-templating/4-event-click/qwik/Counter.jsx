import { Fragment, component$, h, useStore } from '@builder.io/qwik';
export const incrementCount = function incrementCount(props, state) {
  state.count = state.count + 1;
};
export const Counter = component$((props) => {
  const state = useStore({ count: 0 });
  return (
    <Fragment>
      <p>Counter: {state.count}</p>
      <button onClick$={(event) => state.incrementCount}>+1</button>
    </Fragment>
  );
});
export default Counter;
