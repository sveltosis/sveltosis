import { Fragment, component$, h, useStore } from '@builder.io/qwik';
export const light = function light(props, state) {
  return state.TRAFFIC_LIGHTS[state.lightIndex];
};
export const toggleLight = function toggleLight(props, state) {
  state.lightIndex = state.lightIndex === 0 ? 1 : 0;
};
export const TrafficLight = component$((props) => {
  const state = useStore({ TRAFFIC_LIGHTS: ['red', 'green'], lightIndex: 0 });
  return (
    <Fragment>
      <button onClick$={(event) => state.toggleLight}>Toggle light</button>
      <p>Light is: {light(props, state)}</p>
      <p>
        You must
        {light(props, state) === 'red' ? <span>STOP</span> : <span>GO</span>}
      </p>
    </Fragment>
  );
});
export default TrafficLight;
