import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component, Input } from '@angular/core';

const defaultProps = {};

@Component({
  selector: 'class-directive, ClassDirective',
  template: `
    <input [class]="\`form-input \${disabled ? 'disabled' : ''} \${focus ? 'focus' : ''}\`" />
  `,
})
export class ClassDirective {
  @Input() disabled: any;

  focus = true;
}

@NgModule({
  declarations: [ClassDirective],
  imports: [BrowserModule],
  exports: [ClassDirective],
})
export class ClassDirectiveModule {}
