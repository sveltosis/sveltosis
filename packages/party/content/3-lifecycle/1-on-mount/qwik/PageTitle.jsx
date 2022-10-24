import {
  Fragment,
  component$,
  h,
  useClientEffect$,
  useStore,
} from "@builder.io/qwik";
export const PageTitle = component$((props) => {
  const state = useStore({ pageTitle: "" });
  useClientEffect$(() => {
    state.pageTitle = document.title;
  });
  return <p>Page title is: {state.pageTitle}</p>;
});
export default PageTitle;
