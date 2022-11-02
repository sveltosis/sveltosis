import { Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'answer-button, AnswerButton',
  template: `
    <div>
      <button (click)="(clickYes)">YES</button>
      <button (click)="(clickNo)">NO</button>
    </div>
  `,
})
export default class AnswerButton {
  @Output() onYes = new EventEmitter();
  @Output() onNo = new EventEmitter();

  clickYes = function clickYes() {
    this.onYes.emit();
  };
  clickNo = function clickNo() {
    this.onNo.emit();
  };
}
