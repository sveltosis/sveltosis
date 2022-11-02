import { Fragment, component$, h, useStore } from '@builder.io/qwik';
export const InputHello = component$((props) => {
  const state = useStore({ text: 'Hello World' });
  return (
    <Fragment>
      <p>{state.text}</p>
      <input onChange$={(event) => (state.text = event.target.value)} value={state.text}></input>
    </Fragment>
  );
});
export default InputHello;
