import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'is-available, IsAvailable',
  template: `
    <ng-container>
      <input
        id="is-available"
        type="checkbox"
        (input)="isAvailable = $event.target.checked"
        [attr.checked]="isAvailable"
      />
      <label for="is-available">Is available</label>
    </ng-container>
  `,
})
export class IsAvailable {
  isAvailable = false;
}

@NgModule({
  declarations: [IsAvailable],
  imports: [BrowserModule],
  exports: [IsAvailable],
})
export class IsAvailableModule {}
