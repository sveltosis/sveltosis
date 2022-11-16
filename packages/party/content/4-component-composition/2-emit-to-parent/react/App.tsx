import * as React from 'react';
import { useState } from 'react';
import AnswerButton from './AnswerButton.jsx';

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
      <AnswerButton onYes={(event) => onAnswerYes(event)} onNo={(event) => onAnswerNo(event)} />
      <p style="font-size: 50px;">{canCome ? '😀' : '😥'}</p>
    </>
  );
}
