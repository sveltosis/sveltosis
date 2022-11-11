import { For, createSignal } from 'solid-js';
function ColorSelect(props) {
  const [selectedColorId, setSelectedColorId] = createSignal(2);
  const [colors, setColors] = createSignal([
    {
      id: 1,
      text: 'red',
    },
    {
      id: 2,
      text: 'blue',
    },
    {
      id: 3,
      text: 'green',
    },
    {
      id: 4,
      text: 'gray',
      isDisabled: true,
    },
  ]);
  return (
    <select onChange={(event) => setSelectedColorId(event.target.value)} value={selectedColorId()}>
      <For each={colors()}>
        {(color, _index) => {
          const index = _index();
          return (
            <option value={color.id} disabled={color.isDisabled}>
              {color.text}
            </option>
          );
        }}
      </For>
    </select>
  );
}
export default ColorSelect;
