import { Component } from "@angular/core";

@Component({
  selector: "context, Context",
  template: `
    <div>Is disabled? {{disabled}}</div>
  `,
})
export default class Context {
  activeTab = 0;

  constructor(public disabled: "disabled") {}
}
