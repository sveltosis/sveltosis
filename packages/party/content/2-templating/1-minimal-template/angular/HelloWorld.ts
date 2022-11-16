import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'hello-world, HelloWorld',
  template: ` <h1>Hello world</h1> `,
})
export class HelloWorld {}

@NgModule({
  declarations: [HelloWorld],
  imports: [BrowserModule],
  exports: [HelloWorld],
})
export class HelloWorldModule {}
