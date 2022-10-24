import { Component } from "@angular/core";

@Component({
  selector: "input-hello, InputHello",
  template: `
    <div>
      <p>{{text}}</p>
      <input (input)="text = $event.target.value" [value]="text" />
    </div>
  `,
})
export default class InputHello {
  text = "Hello World";
}
