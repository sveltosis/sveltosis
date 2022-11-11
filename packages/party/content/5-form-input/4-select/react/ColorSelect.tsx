import * as React from 'react';
import { useState } from 'react';

export default function ColorSelect(props: any) {
  const [selectedColorId, setSelectedColorId] = useState(() => 2);

  const [colors, setColors] = useState(() => [
    {
      id: 1,
      text: 'red',
    },
    {
      id: 2,
      text: 'blue',
    },
    {
      id: 3,
      text: 'green',
    },
    {
      id: 4,
      text: 'gray',
      isDisabled: true,
    },
  ]);

  return (
    <select onChange={(event) => setSelectedColorId(event.target.value)} value={selectedColorId}>
      {colors?.map((color) => (
        <option value={color.id} disabled={color.isDisabled}>
          {color.text}
        </option>
      ))}
    </select>
  );
}
