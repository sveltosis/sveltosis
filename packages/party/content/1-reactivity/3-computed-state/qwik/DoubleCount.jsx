import { Fragment, component$, h, useStore } from "@builder.io/qwik";
export const DoubleCount = component$((props) => {
  const state = useStore({
    count: 10,
    doubleCount: "get doubleCount() {\n return state.count * 2}",
  });
  return <div>{doubleCount(props, state)}</div>;
});
export default DoubleCount;
