import { Component } from '@angular/core';

@Component({
  selector: 'is-available, IsAvailable',
  template: `
    <div>
      <input
        id="is-available"
        type="checkbox"
        (input)="isAvailable = $event.target.checked"
        [attr.checked]="isAvailable"
      />
      <label for="is-available">Is available</label>
    </div>
  `,
})
export default class IsAvailable {
  isAvailable = false;
}
