import * as React from "react";
import { useState } from "react";

export default function ClassDirective(props: any) {
  const [focus, setFocus] = useState(() => true);

  return (
    <input
      className={`form-input ${props.disabled ? "props.disabled" : ""} ${
        focus ? "focus" : ""
      }`}
    />
  );
}

ClassDirective.defaultProps = {};
