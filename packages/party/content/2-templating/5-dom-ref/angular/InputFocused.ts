import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'input-focused, InputFocused',
  template: ` <input #inputElement /> `,
})
export class InputFocused {
  @ViewChild('inputElement') inputElement: ElementRef;

  ngOnInit() {
    this.inputElement.nativeElement.focus();
  }
}

@NgModule({
  declarations: [InputFocused],
  imports: [BrowserModule],
  exports: [InputFocused],
})
export class InputFocusedModule {}
