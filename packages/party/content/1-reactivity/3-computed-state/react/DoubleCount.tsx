import * as React from 'react';
import { useState } from 'react';

export default function DoubleCount(props: any) {
  const [count, setCount] = useState(() => 10);

  function doubleCount() {
    return count * 2;
  }

  return <div>{doubleCount()}</div>;
}
