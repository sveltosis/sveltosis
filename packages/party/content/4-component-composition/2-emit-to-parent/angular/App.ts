import { Component } from '@angular/core';

@Component({
  selector: 'app, App',
  template: `
    <div>
      <p>Can I come ?</p>
      <answer-button (yes)="(onAnswerYes)" (no)="(onAnswerNo)"></answer-button>
      <p style="font-size: 50px">{{ canCome ? '😀' : '😥' }}</p>
    </div>
  `,
})
export default class App {
  canCome = true;
  onAnswerNo = function onAnswerNo() {
    this.canCome = false;
  };
  onAnswerYes = function onAnswerYes() {
    this.canCome = true;
  };
}
