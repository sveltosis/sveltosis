import { Fragment, component$, h, useCleanup$ } from '@builder.io/qwik';
export const Time = component$((props) => {
  useCleanup$(() => {
    console.log('onUnmount');
  });
  return <Fragment></Fragment>;
});
export default Time;
