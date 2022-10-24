import * as React from "react";
import { useState } from "react";

export default function ColorSelect(props: any) {
  const [selectedColorId, setSelectedColorId] = useState(() => 2);

  const [colors, setColors] = useState(() => [null, null, null, null]);

  return (
    <select
      onChange={(event) => setSelectedColorId(event.target.value)}
      value={selectedColorId}
    >
      {colors?.map((color) => (
        <option value={color.id} disabled={color.isDisabled}>
          {color.text}
        </option>
      ))}
    </select>
  );
}
