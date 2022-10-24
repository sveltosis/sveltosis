[Sveltosis Party]

> Write Svelte components once and compile to any framework

**Website: <https://party.sveltosis.dev>**

## 🤝 Contributing

This site is built with [Astro](https://docs.astro.build). Site content is written in Svelte located in `sveltosis`. A prebuild script then runs Sveltosis (a Mitosis parser), which generates the files in the content folder. For simple edits, you can directly edit the file on GitHub and generate a Pull Request.

For local development, yarn is preferred as package manager:

```bash
yarn i
yarn run dev
```

This project requires Node.js to be `v14.0.0` or higher, because we use new JavaScript features in our code, such as optional chaining.

## 🧑‍💻 Contributors

This project exists thanks to all the people who contribute and wouldn't be possible without the following two projects.
- [Component Party](https://github.com/matschik/component-party) (this example site is a modified copy)
- [Mitosis](https://github.com/BuilderIO/mitosis) (Builder.io)

## ⚖️ License

MIT. 
