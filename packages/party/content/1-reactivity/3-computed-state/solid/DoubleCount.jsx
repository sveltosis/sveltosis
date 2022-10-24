import { createSignal } from "solid-js";
function DoubleCount(props) {
  const [count, setCount] = createSignal(10);
  function doubleCount() {
    return count() * 2;
  }
  return <div>{doubleCount()}</div>;
}
export default DoubleCount;