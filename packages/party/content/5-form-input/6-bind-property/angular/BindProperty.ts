import { Component } from '@angular/core';

@Component({
  selector: 'bind-property, BindProperty',
  template: ` <input (input)="value = $event.target.value" [attr.value]="value" /> `,
})
export default class BindProperty {
  value = 'hello';
}
