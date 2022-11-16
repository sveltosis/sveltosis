import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'css-style, CssStyle',
  template: `
    <ng-container>
      <h1 class="title">I am red</h1>
      <button style="font-size: 10rem">I am a button</button>
    </ng-container>
  `,
  styles: [
    `
      .title {
        color: red;
      }
    `,
  ],
})
export class CssStyle {}

@NgModule({
  declarations: [CssStyle],
  imports: [BrowserModule],
  exports: [CssStyle],
})
export class CssStyleModule {}
