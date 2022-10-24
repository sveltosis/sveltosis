import FunnyButton from "./FunnyButton.svelte";
import { Fragment, component$, h } from "@builder.io/qwik";
export const App = component$((props) => {
  return <FunnyButton>Click me!</FunnyButton>;
});
export default App;
