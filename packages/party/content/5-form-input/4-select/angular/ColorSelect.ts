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
export default class ColorSelect {
  selectedColorId = 2;
  colors = [null, null, null, null];
}
