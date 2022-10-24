import { onMount } from "solid-js";

function InputFocused(props) {
  let inputElement;
  onMount(() => {
    inputElement.focus();
  });
  return <input ref={inputElement} />;
}

export default InputFocused;