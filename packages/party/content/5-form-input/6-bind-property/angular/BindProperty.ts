import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'bind-property, BindProperty',
  template: ` <input (input)="value = $event.target.value" [attr.value]="value" /> `,
})
export class BindProperty {
  value = 'hello';
}

@NgModule({
  declarations: [BindProperty],
  imports: [BrowserModule],
  exports: [BindProperty],
})
export class BindPropertyModule {}
