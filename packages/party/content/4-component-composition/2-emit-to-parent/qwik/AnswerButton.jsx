import { Fragment, component$, h, useStore } from "@builder.io/qwik";
export const AnswerButton = component$((props) => {
  const state = useStore({
    clickNo: "function clickNo() {\n  props.onNo();\n}",
    clickYes: "function clickYes() {\n  props.onYes();\n}",
  });
  return (
    <Fragment>
      <button onClick$={(event) => state.clickYes}> YES </button>
      <button onClick$={(event) => state.clickNo}> NO </button>
    </Fragment>
  );
});
export default AnswerButton;
