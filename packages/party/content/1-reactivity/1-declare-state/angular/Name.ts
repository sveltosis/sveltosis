import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'name, Name',
  template: ` <h1>Hello {{ name }}</h1> `,
})
export class Name {
  name = 'John';
}

@NgModule({
  declarations: [Name],
  imports: [BrowserModule],
  exports: [Name],
})
export class NameModule {}
