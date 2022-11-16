import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'time, Time',
  template: ` <ng-container></ng-container> `,
})
export class Time {
  ngOnDestroy() {
    console.log('onUnmount');
  }
}

@NgModule({
  declarations: [Time],
  imports: [BrowserModule],
  exports: [Time],
})
export class TimeModule {}
