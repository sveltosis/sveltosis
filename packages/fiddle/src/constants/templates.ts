import dedent from "dedent";

export const defaultCode = dedent`
  <script>
    let name = 'Steve';
  </script>

  <div>
    <input bind:value={name} />
    Hello! I can run in React, Vue, Solid, or Liquid!
  </div>
`;

export const templates: { [key: string]: string } = {
  basic: defaultCode,
  textExpressions: dedent`
  <script>
    let a = 5;
    let b = 12;
  </script>

  <div>
    normal:
    { a + b} 
    <br>
    conditional
    { a > 2 ? 'hello' : 'bye'}
  </div>
`,
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
  <script>
    let numbers = ['one', 'two', 'three'];
  </script>

  <ul>
    {#each numbers as num}
      <li>{num}</li>
    {/each}
  </ul>
  `,
  imports: dedent`
  <script>
    import Button from './Button.svelte';

    let disabled = false;
  </script>

  <div>
    <Button type="button" disabled={disabled}><slot/></Button>
  </div>
  `,
  "@html": dedent`
  <script>
    let html = '<b>bold</b>'
  </script>

  <div>
    {@html html}
  </div>
  `,
  "context (not working yet)": dedent`
  <script>
    import { getContext, setContext } from 'svelte';

    let activeTab = 0;

    let disabled = getContext('disabled');

    setContext('activeTab', activeTab)
  </script>

  <div>
    {activeTab}
  </div>
  `,
  style: dedent`
  <script>
  </script>
  
  <input class="form-input"/>
  
  <style>
    input {
      color: red;
      font-size: 12px;
    }
  </style>
  `,
};
