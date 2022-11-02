import { Fragment, component$, h, useStore } from '@builder.io/qwik';
export const Colors = component$((props) => {
  const state = useStore({ colors: ['red', 'green', 'blue'] });
  return (
    <ul>
      {(state.colors || []).map(function (color) {
        return <li>{color}</li>;
      })}
    </ul>
  );
});
export default Colors;
