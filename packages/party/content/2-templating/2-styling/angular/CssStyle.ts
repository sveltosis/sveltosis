import { Component } from "@angular/core";

@Component({
  selector: "css-style, CssStyle",
  template: `
    <div>
      <h1 class="title">I am red</h1>
      <button style="font-size: 10rem">I am a button</button>
    </div>
  `,
  styles: [
    `
      .title {
        color: red;
      }
    `,
  ],
})
export default class CssStyle {}
