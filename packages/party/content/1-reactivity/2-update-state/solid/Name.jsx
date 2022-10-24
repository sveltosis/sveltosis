import { onMount, createSignal } from "solid-js";

function Name(props) {
  const [name, setName] = createSignal("John");
  onMount(() => {
    setName("Jane");
  });
  return <h1>
      Hello
      {name()}
    </h1>;
}

export default Name;