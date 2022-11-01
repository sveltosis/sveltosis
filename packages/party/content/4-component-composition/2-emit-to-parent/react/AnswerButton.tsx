import * as React from 'react';

export default function AnswerButton(props: any) {
  function clickYes() {
    props.onYes();
  }

  function clickNo() {
    props.onNo();
  }

  return (
    <>
      <button onClick={(event) => clickYes}> YES </button>
      <button onClick={(event) => clickNo}> NO </button>
    </>
  );
}
