import {
  Fragment,
  component$,
  h,
  useClientEffect$,
  useRef,
  useStore,
  useWatch$,
} from '@builder.io/qwik';
export const onClick = function onClick(props, state, button0, node, args) {
  console.log('Mounted', node);
  return {
    update() {
      console.log('Updated', args);
    },
    destroy() {
      console.log('Destroyed', node);
    },
  };
};
export const Actions = component$((props) => {
  const button0 = useRef();
  const state = useStore({ actionHandler0: null, buttonText: 'Click Me' });
  useClientEffect$(() => {
    if (button0) {
      state.actionHandler0 = onClick(button0, state.buttonText);
    }
  });
  useWatch$(({ track }) => {
    if (!button0 && state.actionHandler0) {
      state.actionHandler0?.destroy();
      state.actionHandler0 = null;
    } else if (button0 && !state.actionHandler0) {
      if (button0) {
        state.actionHandler0 = onClick(button0, state.buttonText);
      }
    }
  });
  useWatch$(({ track }) => {
    state && track(state, 'buttonText');
    state.actionHandler0?.update(state.buttonText);
  });
  return <button ref={button0}>{state.buttonText}</button>;
});
export default Actions;
