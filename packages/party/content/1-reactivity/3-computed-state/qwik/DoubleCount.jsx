import { Fragment, component$, h, useStore } from '@builder.io/qwik';
export const doubleCount = function doubleCount(props, state) {
  return state.count * 2;
};
export const DoubleCount = component$((props) => {
  const state = useStore({ count: 10 });
  return <div>{doubleCount(props, state)}</div>;
});
export default DoubleCount;
