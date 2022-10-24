import { For, createSignal } from "solid-js";
function Colors(props) {
  const [colors, setColors] = createSignal(["red", "green", "blue"]);
  return <ul>
      <For each={colors()}>
        {(color, _index) => {
        const index = _index();
        return <li>{color}</li>;
      }}
      </For>
    </ul>;
}
export default Colors;