import { createSignal } from 'solid-js';
function BindGroup(props) {
  const [tortilla, setTortilla] = createSignal('Plain');
  const [fillings, setFillings] = createSignal([]);
  return (
    <div>
      <input
        type="radio"
        value="Plain"
        checked={tortilla() === 'Plain'}
        onInput={(event) => setTortilla(event.target.value)}
      />
      <input
        type="radio"
        value="Whole wheat"
        checked={tortilla() === 'Whole wheat'}
        onInput={(event) => setTortilla(event.target.value)}
      />
      <input
        type="radio"
        value="Spinach"
        checked={tortilla() === 'Spinach'}
        onInput={(event) => setTortilla(event.target.value)}
      />
      <br />
      <br />
      <input
        type="checkbox"
        value="Rice"
        checked={fillings().includes('Rice')}
        onInput={(event) =>
          event.target.checked
            ? fillings().push(event.target.value)
            : fillings().splice(fillings().indexOf('Rice'), 1)
        }
      />
      <input
        type="checkbox"
        value="Beans"
        checked={fillings().includes('Beans')}
        onInput={(event) =>
          event.target.checked
            ? fillings().push(event.target.value)
            : fillings().splice(fillings().indexOf('Beans'), 1)
        }
      />
      <input
        type="checkbox"
        value="Cheese"
        checked={fillings().includes('Cheese')}
        onInput={(event) =>
          event.target.checked
            ? fillings().push(event.target.value)
            : fillings().splice(fillings().indexOf('Cheese'), 1)
        }
      />
      <input
        type="checkbox"
        value="Guac (extra)"
        checked={fillings().includes('Guac (extra)')}
        onInput={(event) =>
          event.target.checked
            ? fillings().push(event.target.value)
            : fillings().splice(fillings().indexOf('Guac (extra)'), 1)
        }
      />
      <p>
        Tortilla:
        {tortilla()}
      </p>
      <p>
        Fillings:
        {fillings()}
      </p>
    </div>
  );
}
export default BindGroup;
