import { Fragment, component$, h, useStore } from "@builder.io/qwik";
export const TrafficLight = component$((props) => {
  const state = useStore({
    TRAFFIC_LIGHTS: ["red", "green"],
    light: "get light() {\n return state.TRAFFIC_LIGHTS[state.lightIndex]}",
    lightIndex: 0,
    toggleLight:
      "function toggleLight() {\n  state.lightIndex = state.lightIndex === 0 ? 1 : 0;\n}",
  });
  return (
    <Fragment>
      <button onClick$={(event) => state.toggleLight}>Toggle light</button>
      <p>Light is: {light(props, state)}</p>
      <p>
        You must
        {light(props, state) === "red" ? <span>STOP</span> : <span>GO</span>}
      </p>
    </Fragment>
  );
});
export default TrafficLight;
