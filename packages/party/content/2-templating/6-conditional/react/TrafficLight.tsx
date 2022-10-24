import * as React from "react";
import { useState } from "react";

export default function TrafficLight(props: any) {
  const [TRAFFIC_LIGHTS, setTRAFFIC_LIGHTS] = useState(() => ["red", "green"]);

  const [lightIndex, setLightIndex] = useState(() => 0);

  function light() {
    return TRAFFIC_LIGHTS[lightIndex];
  }

  function toggleLight() {
    setLightIndex(lightIndex === 0 ? 1 : 0);
  }

  return (
    <>
      <button onClick={() => toggleLight}>Toggle light</button>
      <p>
        Light is:
        {light()}
      </p>
      <p>
        You must
        {light() === "red" ? <span>STOP</span> : <span>GO</span>}
      </p>
    </>
  );
}
