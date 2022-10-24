import {
  Fragment,
  component$,
  h,
  useContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
export const Context = component$((props) => {
  const disabled = useContext("disabled");
  const state = useStore({ activeTab: 0 });
  useContextProvider("activeTab", useStore({}));
  return <div>Is disabled? {disabled}</div>;
});
export default Context;
