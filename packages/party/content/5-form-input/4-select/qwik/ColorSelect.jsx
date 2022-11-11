import { Fragment, component$, h, useStore } from '@builder.io/qwik';
export const ColorSelect = component$((props) => {
  const state = useStore({
    colors: [
      { id: 1, text: 'red' },
      { id: 2, text: 'blue' },
      { id: 3, text: 'green' },
      { id: 4, isDisabled: true, text: 'gray' },
    ],
    selectedColorId: 2,
  });
  return (
    <select
      onChange$={(event) => (state.selectedColorId = event.target.value)}
      value={state.selectedColorId}
    >
      {(state.colors || []).map(function (color) {
        return (
          <option value={color.id} disabled={color.isDisabled}>
            {color.text}
          </option>
        );
      })}
    </select>
  );
});
export default ColorSelect;
