import * as React from 'react';
import { useState } from 'react';

export default function BindProperty(props: any) {
  const [value, setValue] = useState(() => 'hello');

  return <input onChange={(event) => setValue(event.target.value)} value={value} />;
}
