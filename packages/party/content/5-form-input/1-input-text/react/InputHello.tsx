import * as React from 'react';
import { useState } from 'react';

export default function InputHello(props: any) {
  const [text, setText] = useState(() => 'Hello World');

  return (
    <>
      <p>{text}</p>
      <input onChange={(event) => setText(event.target.value)} value={text} />
    </>
  );
}
