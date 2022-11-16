import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'color-select, ColorSelect',
  template: `
    <select (change)="selectedColorId = $event.target.value" [attr.value]="selectedColorId">
      <ng-container *ngFor="let color of colors">
        <option [attr.value]="color.id" [attr.disabled]="color.isDisabled">
          {{ color.text }}
        </option>
      </ng-container>
    </select>
  `,
})
export class ColorSelect {
  selectedColorId = 2;
  colors = [
    { id: 1, text: 'red' },
    { id: 2, text: 'blue' },
    { id: 3, text: 'green' },
    { id: 4, text: 'gray', isDisabled: true },
  ];
}

@NgModule({
  declarations: [ColorSelect],
  imports: [BrowserModule],
  exports: [ColorSelect],
})
export class ColorSelectModule {}
