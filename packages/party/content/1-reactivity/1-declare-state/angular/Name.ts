import { Component } from "@angular/core";

@Component({
  selector: "name, Name",
  template: `
    <h1>Hello {{name}}</h1>
  `,
})
export default class Name {
  name = "John";
}
