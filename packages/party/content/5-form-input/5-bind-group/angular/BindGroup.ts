import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'bind-group, BindGroup',
  template: `
    <div>
      <input
        type="radio"
        value="Plain"
        [attr.checked]="tortilla === 'Plain'"
        (input)="tortilla = $event.target.value"
      />
      <input
        type="radio"
        value="Whole wheat"
        [attr.checked]="tortilla === 'Whole wheat'"
        (input)="tortilla = $event.target.value"
      />
      <input
        type="radio"
        value="Spinach"
        [attr.checked]="tortilla === 'Spinach'"
        (input)="tortilla = $event.target.value"
      />
      <br />
      <br />
      <input
        type="checkbox"
        value="Rice"
        [attr.checked]="fillings === 'Rice'"
        (input)="fillings = $event.target.value"
      />
      <input
        type="checkbox"
        value="Beans"
        [attr.checked]="fillings === 'Beans'"
        (input)="fillings = $event.target.value"
      />
      <input
        type="checkbox"
        value="Cheese"
        [attr.checked]="fillings === 'Cheese'"
        (input)="fillings = $event.target.value"
      />
      <input
        type="checkbox"
        value="Guac (extra)"
        [attr.checked]="fillings === 'Guac (extra)'"
        (input)="fillings = $event.target.value"
      />
      <p>Tortilla: {{ tortilla }}</p>
      <p>Fillings: {{ fillings }}</p>
    </div>
  `,
})
export class BindGroup {
  tortilla = 'Plain';
  fillings = [];
}

@NgModule({
  declarations: [BindGroup],
  imports: [BrowserModule],
  exports: [BindGroup],
})
export class BindGroupModule {}
