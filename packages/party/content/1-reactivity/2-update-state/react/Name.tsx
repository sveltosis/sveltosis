import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Name(props: any) {
  const [name, setName] = useState(() => 'John');

  useEffect(() => {
    setName('Jane');
  }, []);

  return (
    <h1>
      Hello
      {name}
    </h1>
  );
}
