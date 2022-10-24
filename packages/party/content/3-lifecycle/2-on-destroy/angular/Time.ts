import { Component } from "@angular/core";

@Component({
  selector: "time, Time",
  template: `
    <div></div>
  `,
})
export default class Time {
  ngOnDestroy() {
    console.log("onUnmount");
  }
}
