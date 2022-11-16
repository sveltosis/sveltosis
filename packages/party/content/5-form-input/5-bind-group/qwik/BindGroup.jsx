import { Fragment, component$, h, useStore } from '@builder.io/qwik';
export const BindGroup = component$((props) => {
  const state = useStore({ fillings: [], tortilla: 'Plain' });
  return (
    <div>
      <input
        type="radio"
        value="Plain"
        checked={(() => {
          state.tortilla === 'Plain';
        })()}
        onChange$={(event) => (state.tortilla = event.target.value)}
      ></input>
      <input
        type="radio"
        value="Whole wheat"
        checked={(() => {
          state.tortilla === 'Whole wheat';
        })()}
        onChange$={(event) => (state.tortilla = event.target.value)}
      ></input>
      <input
        type="radio"
        value="Spinach"
        checked={(() => {
          state.tortilla === 'Spinach';
        })()}
        onChange$={(event) => (state.tortilla = event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <input
        type="checkbox"
        value="Rice"
        checked={(() => {
          state.fillings === 'Rice';
        })()}
        onChange$={(event) => (state.fillings = event.target.value)}
      ></input>
      <input
        type="checkbox"
        value="Beans"
        checked={(() => {
          state.fillings === 'Beans';
        })()}
        onChange$={(event) => (state.fillings = event.target.value)}
      ></input>
      <input
        type="checkbox"
        value="Cheese"
        checked={(() => {
          state.fillings === 'Cheese';
        })()}
        onChange$={(event) => (state.fillings = event.target.value)}
      ></input>
      <input
        type="checkbox"
        value="Guac (extra)"
        checked={(() => {
          state.fillings === 'Guac (extra)';
        })()}
        onChange$={(event) => (state.fillings = event.target.value)}
      ></input>
      <p>Tortilla: {state.tortilla}</p>
      <p>Fillings: {state.fillings}</p>
    </div>
  );
});
export default BindGroup;
