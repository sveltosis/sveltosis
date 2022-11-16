import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'pick-pill, PickPill',
  template: `
    <ng-container>
      <div>Picked: {{ picked }}</div>
      <input
        id="blue-pill"
        type="radio"
        value="blue"
        [attr.checked]="picked === 'blue'"
        (input)="picked = $event.target.value"
      />
      <label for="blue-pill">Blue pill</label>
      <input
        id="red-pill"
        type="radio"
        value="red"
        [attr.checked]="picked === 'red'"
        (input)="picked = $event.target.value"
      />
      <label for="red-pill">Red pill</label>
    </ng-container>
  `,
})
export class PickPill {
  picked = 'red';
}

@NgModule({
  declarations: [PickPill],
  imports: [BrowserModule],
  exports: [PickPill],
})
export class PickPillModule {}
