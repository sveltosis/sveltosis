import AnswerButton from "./AnswerButton.svelte";
import { Fragment, component$, h, useStore } from "@builder.io/qwik";
export const App = component$((props) => {
  const state = useStore({
    canCome: true,
    onAnswerNo: "function onAnswerNo() {\n  state.canCome = false;\n}",
    onAnswerYes: "function onAnswerYes() {\n  state.canCome = true;\n}",
  });
  return (
    <Fragment>
      <p>Can I come ?</p>
      <AnswerButton
        onYes$={(event) => state.onAnswerYes}
        onNo$={(event) => state.onAnswerNo}
      ></AnswerButton>
      <p style="font-size: 50px;">{state.canCome ? "😀" : "😥"}</p>
    </Fragment>
  );
});
export default App;
