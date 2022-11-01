import { Show, createSignal } from 'solid-js';
function TrafficLight(props) {
  const [TRAFFIC_LIGHTS, setTRAFFIC_LIGHTS] = createSignal(['red', 'green']);
  const [lightIndex, setLightIndex] = createSignal(0);
  function light() {
    return TRAFFIC_LIGHTS()[lightIndex()];
  }
  function toggleLight() {
    setLightIndex(lightIndex() === 0 ? 1 : 0);
  }
  return (
    <>
      <button onClick={(event) => toggleLight}>Toggle light</button>
      <p>
        Light is:
        {light()}
      </p>
      <p>
        You must
        <Show fallback={<span>GO</span>} when={light() === 'red'}>
          <span>STOP</span>
        </Show>
      </p>
    </>
  );
}
export default TrafficLight;
