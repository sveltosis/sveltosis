import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'counter, Counter',
  template: `
    <ng-container>
      <p>Counter: {{ count }}</p>
      <button (click)="incrementCount($event)">+1</button>
    </ng-container>
  `,
})
export class Counter {
  count = 0;
  incrementCount = function incrementCount() {
    this.count = this.count + 1;
  };
}

@NgModule({
  declarations: [Counter],
  imports: [BrowserModule],
  exports: [Counter],
})
export class CounterModule {}
