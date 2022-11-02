import { Fragment, component$, h, useStore } from '@builder.io/qwik';
export const RawHtml = component$((props) => {
  const state = useStore({ html: '<b>bold</b>' });
  return <div dangerouslySetInnerHTML={state.html}></div>;
});
export default RawHtml;
