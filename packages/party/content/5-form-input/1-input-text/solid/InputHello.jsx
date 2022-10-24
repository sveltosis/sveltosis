import { createSignal } from "solid-js";

function InputHello(props) {
  const [text, setText] = createSignal("Hello World");
  return <>
      <p>{text()}</p>
      <input onInput={event => setText(event.target.value)} value={text()} />
    </>;
}

export default InputHello;