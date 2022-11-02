import { Component } from '@angular/core';

@Component({
  selector: 'colors, Colors',
  template: `
    <ul>
      <ng-container *ngFor="let color of colors">
        <li>{{ color }}</li>
      </ng-container>
    </ul>
  `,
})
export default class Colors {
  colors = ['red', 'green', 'blue'];
}
