import * as React from 'react';
import { useState } from 'react';

export default function Name(props: any) {
  const [name, setName] = useState(() => 'John');

  return (
    <h1>
      Hello
      {name}
    </h1>
  );
}
