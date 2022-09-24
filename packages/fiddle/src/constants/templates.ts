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
    let numberse = ['one', 'two', 'three'];
  </script>

  <ul>
    {#each numbers as num}
      <li>{num}</li>
    {/each}
  </ul>
  `,
};
