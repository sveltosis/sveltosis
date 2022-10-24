import {
  Fragment,
  component$,
  h,
  useClientEffect$,
  useRef,
  useStore,
  useWatch$,
} from "@builder.io/qwik";
export const Actions = component$((props) => {
  const button0 = useRef();
  const state = useStore({
    actionHandler0: null,
    buttonText: "Click Me",
    onClick:
      "function onClick(node, args) {\n  console.log('Mounted', node);\n  return {\n    update() {\n      console.log('Updated', args);\n    },\n    destroy() {\n      console.log('Destroyed', node);\n    }\n  };\n}",
  });
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
    state && track(state, "buttonText");
    state.actionHandler0?.update(state.buttonText);
  });
  return <button ref={button0}>{state.buttonText}</button>;
});
export default Actions;
