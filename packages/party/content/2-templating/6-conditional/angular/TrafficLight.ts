import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'traffic-light, TrafficLight',
  template: `
    <ng-container>
      <button (click)="toggleLight($event)">Toggle light</button>
      <p>Light is: {{ light }}</p>
      <p>
        You must

        <ng-container *ngIf="light === 'red'"><span>STOP</span></ng-container>
      </p>
    </ng-container>
  `,
})
export class TrafficLight {
  TRAFFIC_LIGHTS = ['red', 'green'];
  lightIndex = 0;
  get light() {
    return this.TRAFFIC_LIGHTS[this.lightIndex];
  }
  toggleLight = function toggleLight() {
    this.lightIndex = this.lightIndex === 0 ? 1 : 0;
  };
}

@NgModule({
  declarations: [TrafficLight],
  imports: [BrowserModule],
  exports: [TrafficLight],
})
export class TrafficLightModule {}
