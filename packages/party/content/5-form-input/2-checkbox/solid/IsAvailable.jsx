import { createSignal } from 'solid-js';
function IsAvailable(props) {
  const [isAvailable, setIsAvailable] = createSignal(false);
  return (
    <>
      <input
        id="is-available"
        type="checkbox"
        onInput={(event) => setIsAvailable(event.target.checked)}
        checked={isAvailable()}
      />
      <label for="is-available">Is available</label>
    </>
  );
}
export default IsAvailable;
