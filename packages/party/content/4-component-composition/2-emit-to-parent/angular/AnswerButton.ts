import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'answer-button, AnswerButton',
  template: `
    <ng-container>
      <button (click)="clickYes($event)">YES</button>
      <button (click)="clickNo($event)">NO</button>
    </ng-container>
  `,
})
export class AnswerButton {
  @Output() onYes = new EventEmitter();
  @Output() onNo = new EventEmitter();

  clickYes = function clickYes() {
    this.onYes.emit();
  };
  clickNo = function clickNo() {
    this.onNo.emit();
  };
}

@NgModule({
  declarations: [AnswerButton],
  imports: [BrowserModule],
  exports: [AnswerButton],
})
export class AnswerButtonModule {}
