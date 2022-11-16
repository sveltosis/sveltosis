import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'double-count, DoubleCount',
  template: ` <div>{{ doubleCount }}</div> `,
})
export class DoubleCount {
  count = 10;
  get doubleCount() {
    return this.count * 2;
  }
}

@NgModule({
  declarations: [DoubleCount],
  imports: [BrowserModule],
  exports: [DoubleCount],
})
export class DoubleCountModule {}
