import { onMount, on, createEffect, createSignal } from 'solid-js';
function Actions(props) {
  const [buttonText, setButtonText] = createSignal('Click Me');
  const [actionHandler0, setActionHandler0] = createSignal(null);
  function onClick(node, args) {
    console.log('Mounted', node);
    return {
      update() {
        console.log('Updated', args);
      },
      destroy() {
        console.log('Destroyed', node);
      },
    };
  }
  let button0;
  onMount(() => {
    if (button0) {
      setActionHandler0(onClick(button0, buttonText()));
    }
  });
  function onUpdateFn_0() {
    if (!button0 && actionHandler0()) {
      actionHandler0()?.destroy();
      setActionHandler0(null);
    } else if (button0 && !actionHandler0()) {
      if (button0) {
        setActionHandler0(onClick(button0, buttonText()));
      }
    }
  }
  createEffect(on(() => [button0], onUpdateFn_0));
  function onUpdateFn_1() {
    actionHandler0()?.update(buttonText());
  }
  createEffect(on(() => [buttonText()], onUpdateFn_1));
  return <button ref={button0}>{buttonText()}</button>;
}
export default Actions;
