import { createSignal } from "solid-js";

function ClassDirective(props) {
  const [focus, setFocus] = createSignal(true);
  return <input class={`form-input ${props.disabled ? "props.disabled" : ""} ${focus() ? "focus()" : ""}`} />;
}

export default ClassDirective;