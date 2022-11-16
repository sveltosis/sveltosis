import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'app, App',
  template: ` <funny-button>Click me!</funny-button> `,
})
export class App {}

@NgModule({
  declarations: [App],
  imports: [BrowserModule, FunnyButtonModule],
  exports: [App],
})
export class AppModule {}
