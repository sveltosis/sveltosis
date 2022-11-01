import * as React from 'react';
import { useState } from 'react';
import AnswerButton from './AnswerButton.svelte';

export default function App(props: any) {
  const [canCome, setCanCome] = useState(() => true);

  function onAnswerNo() {
    setCanCome(false);
  }

  function onAnswerYes() {
    setCanCome(true);
  }

  return (
    <>
      <p>Can I come ?</p>
      <AnswerButton onYes={(event) => onAnswerYes} onNo={(event) => onAnswerNo} />
      <p style="font-size: 50px;">{canCome ? '😀' : '😥'}</p>
    </>
  );
}
