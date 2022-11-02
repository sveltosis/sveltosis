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
        checked={fillings.includes('Rice')}
        onChange={(event) =>
          event.target.checked
            ? fillings.push(event.target.value)
            : fillings.splice(fillings.indexOf('Rice'), 1)
        }
      />
      <input
        type="checkbox"
        value="Beans"
        checked={fillings.includes('Beans')}
        onChange={(event) =>
          event.target.checked
            ? fillings.push(event.target.value)
            : fillings.splice(fillings.indexOf('Beans'), 1)
        }
      />
      <input
        type="checkbox"
        value="Cheese"
        checked={fillings.includes('Cheese')}
        onChange={(event) =>
          event.target.checked
            ? fillings.push(event.target.value)
            : fillings.splice(fillings.indexOf('Cheese'), 1)
        }
      />
      <input
        type="checkbox"
        value="Guac (extra)"
        checked={fillings.includes('Guac (extra)')}
        onChange={(event) =>
          event.target.checked
            ? fillings.push(event.target.value)
            : fillings.splice(fillings.indexOf('Guac (extra)'), 1)
        }
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
