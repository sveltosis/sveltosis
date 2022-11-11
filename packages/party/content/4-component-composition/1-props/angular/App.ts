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
export default class App {}
