import { Fragment, component$, h, useStore } from "@builder.io/qwik";
export const BindGroup = component$((props) => {
  const state = useStore({ fillings: [], tortilla: "Plain" });
  return (
    <div>
      <input
        type="radio"
        value="Plain"
        checked={(() => {
          state.tortilla === "Plain";
        })()}
        onChange$={(event) => (state.tortilla = event.target.value)}
      ></input>
      <input
        type="radio"
        value="Whole wheat"
        checked={(() => {
          state.tortilla === "Whole wheat";
        })()}
        onChange$={(event) => (state.tortilla = event.target.value)}
      ></input>
      <input
        type="radio"
        value="Spinach"
        checked={(() => {
          state.tortilla === "Spinach";
        })()}
        onChange$={(event) => (state.tortilla = event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <input
        type="checkbox"
        value="Rice"
        checked={state.fillings.includes("Rice")}
        onChange$={(event) =>
          event.target.checked
            ? state.fillings.push(event.target.value)
            : state.fillings.splice(state.fillings.indexOf("Rice"), 1)
        }
      ></input>
      <input
        type="checkbox"
        value="Beans"
        checked={state.fillings.includes("Beans")}
        onChange$={(event) =>
          event.target.checked
            ? state.fillings.push(event.target.value)
            : state.fillings.splice(state.fillings.indexOf("Beans"), 1)
        }
      ></input>
      <input
        type="checkbox"
        value="Cheese"
        checked={state.fillings.includes("Cheese")}
        onChange$={(event) =>
          event.target.checked
            ? state.fillings.push(event.target.value)
            : state.fillings.splice(state.fillings.indexOf("Cheese"), 1)
        }
      ></input>
      <input
        type="checkbox"
        value="Guac (extra)"
        checked={state.fillings.includes("Guac (extra)")}
        onChange$={(event) =>
          event.target.checked
            ? state.fillings.push(event.target.value)
            : state.fillings.splice(state.fillings.indexOf("Guac (extra)"), 1)
        }
      ></input>
      <p>Tortilla: {state.tortilla}</p>
      <p>Fillings: {state.fillings}</p>
    </div>
  );
});
export default BindGroup;
