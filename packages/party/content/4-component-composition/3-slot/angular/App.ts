import { Component } from "@angular/core";

import FunnyButton from "./FunnyButton.svelte";

@Component({
  selector: "app, App",
  template: `
    <funny-button>Click me!</funny-button>
  `,
})
export default class App {}
