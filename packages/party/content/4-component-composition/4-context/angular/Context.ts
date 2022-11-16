import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'context, Context',
  template: ` <div>Is disabled? {{ disabled }}</div> `,
})
export class Context {
  activeTab = 0;

  constructor(public disabled: 'disabled') {}
}

@NgModule({
  declarations: [Context],
  imports: [BrowserModule],
  exports: [Context],
})
export class ContextModule {}
