import * as React from "react";
import { useState } from "react";

export default function Colors(props: any) {
  const [colors, setColors] = useState(() => ["red", "green", "blue"]);

  return (
    <ul>
      {colors?.map((color) => (
        <li>{color}</li>
      ))}
    </ul>
  );
}
