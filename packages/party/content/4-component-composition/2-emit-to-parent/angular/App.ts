import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'app, App',
  template: `
    <ng-container>
      <p>Can I come ?</p>
      <AnswerButton (yes)="onAnswerYes($event)" (no)="onAnswerNo($event)"></AnswerButton>
      <p style="font-size: 50px">{{ canCome ? '😀' : '😥' }}</p>
    </ng-container>
  `,
})
export class App {
  canCome = true;
  onAnswerNo = function onAnswerNo() {
    this.canCome = false;
  };
  onAnswerYes = function onAnswerYes() {
    this.canCome = true;
  };
}

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AnswerButtonModule],
  exports: [App],
})
export class AppModule {}
