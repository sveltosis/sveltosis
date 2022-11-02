import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'input-focused, InputFocused',
  template: ` <input #inputElement /> `,
})
export default class InputFocused {
  @ViewChild('inputElement') inputElement: ElementRef;

  ngOnInit() {
    this.inputElement.nativeElement.focus();
  }
}
