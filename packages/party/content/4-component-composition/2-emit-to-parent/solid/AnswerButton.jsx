function AnswerButton(props) {
  function clickYes() {
    props.onYes();
  }

  function clickNo() {
    props.onNo();
  }

  return <>
      <button onClick={() => clickYes}>YES</button>
      <button onClick={() => clickNo}>NO</button>
    </>;
}

export default AnswerButton;