function AnswerButton(props) {
  function clickYes() {
    props.onYes();
  }
  function clickNo() {
    props.onNo();
  }
  return (
    <>
      <button onClick={(event) => clickYes}>YES</button>
      <button onClick={(event) => clickNo}>NO</button>
    </>
  );
}
export default AnswerButton;
