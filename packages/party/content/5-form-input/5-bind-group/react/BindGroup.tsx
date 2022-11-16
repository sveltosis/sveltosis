import * as React from 'react';
import { useState } from 'react';

export default function BindGroup(props: any) {
  const [tortilla, setTortilla] = useState(() => 'Plain');

  const [fillings, setFillings] = useState(() => []);

  return (
    <div>
      <input
        type="radio"
        value="Plain"
        checked={tortilla === 'Plain'}
        onChange={(event) => setTortilla(event.target.value)}
      />
      <input
        type="radio"
        value="Whole wheat"
        checked={tortilla === 'Whole wheat'}
        onChange={(event) => setTortilla(event.target.value)}
      />
      <input
        type="radio"
        value="Spinach"
        checked={tortilla === 'Spinach'}
        onChange={(event) => setTortilla(event.target.value)}
      />
      <br />
      <br />
      <input
        type="checkbox"
        value="Rice"
        checked={fillings === 'Rice'}
        onChange={(event) => setFillings(event.target.value)}
      />
      <input
        type="checkbox"
        value="Beans"
        checked={fillings === 'Beans'}
        onChange={(event) => setFillings(event.target.value)}
      />
      <input
        type="checkbox"
        value="Cheese"
        checked={fillings === 'Cheese'}
        onChange={(event) => setFillings(event.target.value)}
      />
      <input
        type="checkbox"
        value="Guac (extra)"
        checked={fillings === 'Guac (extra)'}
        onChange={(event) => setFillings(event.target.value)}
      />
      <p>
        Tortilla:
        {tortilla}
      </p>
      <p>
        Fillings:
        {fillings}
      </p>
    </div>
  );
}
