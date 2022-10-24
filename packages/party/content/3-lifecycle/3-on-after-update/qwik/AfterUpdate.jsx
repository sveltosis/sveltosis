import { Fragment, component$, h, useWatch$ } from "@builder.io/qwik";
export const AfterUpdate = component$((props) => {
  useWatch$(({ track }) => {
    console.log("updated");
  });
  return <Fragment></Fragment>;
});
export default AfterUpdate;
