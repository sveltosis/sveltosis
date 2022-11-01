import { createSignal } from 'solid-js';
function Counter(props) {
  const [count, setCount] = createSignal(0);
  function incrementCount() {
    setCount(count() + 1);
  }
  return (
    <>
      <p>
        Counter:
        {count()}
      </p>
      <button onClick={(event) => incrementCount}>+1</button>
    </>
  );
}
export default Counter;
