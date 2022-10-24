import { createSignal } from "solid-js";
function PickPill(props) {
  const [picked, setPicked] = createSignal("red");
  return <>
      <div>
        Picked:
        {picked()}
      </div>
      <input id="blue-pill" type="radio" value="blue" checked={picked() === "blue"} onInput={event => setPicked(event.target.value)} />
      <label for="blue-pill">Blue pill</label>
      <input id="red-pill" type="radio" value="red" checked={picked() === "red"} onInput={event => setPicked(event.target.value)} />
      <label for="red-pill">Red pill</label>
    </>;
}
export default PickPill;