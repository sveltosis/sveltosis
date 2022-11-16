import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'input-hello, InputHello',
  template: `
    <ng-container>
      <p>{{ text }}</p>
      <input (input)="text = $event.target.value" [attr.value]="text" />
    </ng-container>
  `,
})
export class InputHello {
  text = 'Hello World';
}

@NgModule({
  declarations: [InputHello],
  imports: [BrowserModule],
  exports: [InputHello],
})
export class InputHelloModule {}
