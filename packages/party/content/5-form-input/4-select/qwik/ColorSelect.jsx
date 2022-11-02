import { Fragment, component$, h, useStore } from '@builder.io/qwik';
export const ColorSelect = component$((props) => {
  const state = useStore({
    colors: [null, null, null, null],
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
