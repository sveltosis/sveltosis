import { Component } from '@angular/core';

@Component({
  selector: 'counter, Counter',
  template: `
    <div>
      <p>Counter: {{ count }}</p>
      <button (click)="(incrementCount)">+1</button>
    </div>
  `,
})
export default class Counter {
  count = 0;
  incrementCount = function incrementCount() {
    this.count = this.count + 1;
  };
}
