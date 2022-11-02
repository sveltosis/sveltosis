import { Component } from '@angular/core';

@Component({
  selector: 'double-count, DoubleCount',
  template: ` <div>{{ doubleCount }}</div> `,
})
export default class DoubleCount {
  count = 10;
  get doubleCount() {
    return this.count * 2;
  }
}
