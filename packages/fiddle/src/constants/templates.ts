import dedent from "dedent";

export const defaultCode = dedent`
  <script>
    let name = 'Steve';
  </script>

  <div>
    <input value={name} />
    Hello! I can run in React, Vue, Solid, or Liquid!
  </div>
`;

export const templates: { [key: string]: string } = {
  basic: defaultCode,
  reactive: dedent`
    <script>
      let name = "Steve"

      $: lowercaseName = name.toLowerCase();
    </script>

    <div>
      <input value={name} />
      Lowercase: {lowercaseName}
    </div>

  `,

  "if / else": dedent`
    <script>
      let show = true;

      function toggle() {
        show = !show;
      }
    </script>

    {#if show}
      <button on:click={toggle}>
        Hide
      </button>
    {:else}
      <button on:click={toggle}>
        Show
      </button>
    {/if}
  


  `,
  loop: dedent`
    import { useStore } from "@builder.io/mitosis";
    
    export default function MyComponent(props) {
      const state = useStore({
        list: ["hello", "world"],
        newItemName: "New item",
        addItem() {
          state.list = [
            ...state.list, 
            state.newItemName,
          ]
        }
      })
    
      return (
        <div
          css={{
            padding: "10px",
          }}
        >
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          />
    
          <input
            class="shadow-md rounded w-full px-4 py-2"
            value={state.newItemName}
            onChange={(event) => {state.newItemName = event.target.value}}
          />
    
          <button
            class="bg-blue-500 rounded w-full text-white font-bold py-2 px-4 "
            css={{
              margin: "10px 0",
            }}
            onClick={(event) => state.addItem()}
          >
            Add list item
          </button>
    
          <div class="shadow-md rounded">
            {state.list.map((item) => (
              <div
                class="border-gray-200 border-b"
                css={{
                  padding: "10px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      );
    }
  `,
};
