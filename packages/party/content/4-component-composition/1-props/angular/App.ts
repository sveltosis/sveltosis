import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'app, App',
  template: `
    <user-profile
      name="John"
      [age]="20"
      [favouriteColors]="['green', 'blue', 'red']"
      [isAvailable]="true"
    ></user-profile>
  `,
})
export class App {}

@NgModule({
  declarations: [App],
  imports: [BrowserModule, UserProfileModule],
  exports: [App],
})
export class AppModule {}
