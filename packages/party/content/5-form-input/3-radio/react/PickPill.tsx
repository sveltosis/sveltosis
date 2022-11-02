import * as React from 'react';
import { useState } from 'react';

export default function PickPill(props: any) {
  const [picked, setPicked] = useState(() => 'red');

  return (
    <>
      <div>
        Picked:
        {picked}
      </div>
      <input
        id="blue-pill"
        type="radio"
        value="blue"
        checked={picked === 'blue'}
        onChange={(event) => setPicked(event.target.value)}
      />
      <label for="blue-pill">Blue pill</label>
      <input
        id="red-pill"
        type="radio"
        value="red"
        checked={picked === 'red'}
        onChange={(event) => setPicked(event.target.value)}
      />
      <label for="red-pill">Red pill</label>
    </>
  );
}
