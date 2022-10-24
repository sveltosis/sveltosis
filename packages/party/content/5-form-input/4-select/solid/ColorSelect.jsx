import { For, createSignal } from "solid-js";
function ColorSelect(props) {
  const [selectedColorId, setSelectedColorId] = createSignal(2);
  const [colors, setColors] = createSignal([null, null, null, null]);
  return <select onChange={event => setSelectedColorId(event.target.value)} value={selectedColorId()}>
      <For each={colors()}>
        {(color, _index) => {
        const index = _index();
        return <option value={color.id} disabled={color.isDisabled}>
              {color.text}
            </option>;
      }}
      </For>
    </select>;
}
export default ColorSelect;