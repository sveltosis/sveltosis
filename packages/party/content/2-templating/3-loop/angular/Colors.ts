import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
export class Colors {
  colors = ['red', 'green', 'blue'];
}

@NgModule({
  declarations: [Colors],
  imports: [BrowserModule],
  exports: [Colors],
})
export class ColorsModule {}
