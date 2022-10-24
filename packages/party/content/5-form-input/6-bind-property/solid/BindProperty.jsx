import { createSignal } from "solid-js";
function BindProperty(props) {
  const [value, setValue] = createSignal("hello");
  return <input onInput={event => setValue(event.target.value())} value={value()} />;
}
export default BindProperty;