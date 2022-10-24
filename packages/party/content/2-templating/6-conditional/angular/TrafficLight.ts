import { Component } from "@angular/core";

@Component({
  selector: "traffic-light, TrafficLight",
  template: `
    <div>
      <button (click)="toggleLight">Toggle light</button>
      <p>Light is: {{light}}</p>
      <p>
        You must

        <ng-container *ngIf="light === 'red'"><span>STOP</span></ng-container>
      </p>
    </div>
  `,
})
export default class TrafficLight {
  TRAFFIC_LIGHTS = ["red", "green"];
  lightIndex = 0;
  get light() {
    return this.TRAFFIC_LIGHTS[this.lightIndex];
  }
  toggleLight = function toggleLight() {
    this.lightIndex = this.lightIndex === 0 ? 1 : 0;
  };
}
