import { createSignal } from 'solid-js';
import AnswerButton from './AnswerButton.svelte';
function App(props) {
  const [canCome, setCanCome] = createSignal(true);
  function onAnswerNo() {
    setCanCome(false);
  }
  function onAnswerYes() {
    setCanCome(true);
  }
  return (
    <>
      <p>Can I come ?</p>
      <AnswerButton onYes={(event) => onAnswerYes} onNo={(event) => onAnswerNo}></AnswerButton>
      <p style="font-size: 50px;">{canCome() ? '😀' : '😥'}</p>
    </>
  );
}
export default App;
