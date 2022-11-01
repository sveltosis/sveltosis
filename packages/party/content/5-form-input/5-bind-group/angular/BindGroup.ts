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
        [attr.checked]="fillings.includes('Rice')"
        (input)="
          $event.target.checked
            ? fillings.push($event.target.value)
            : fillings.splice(fillings.indexOf('Rice'), 1)
        "
      />
      <input
        type="checkbox"
        value="Beans"
        [attr.checked]="fillings.includes('Beans')"
        (input)="
          $event.target.checked
            ? fillings.push($event.target.value)
            : fillings.splice(fillings.indexOf('Beans'), 1)
        "
      />
      <input
        type="checkbox"
        value="Cheese"
        [attr.checked]="fillings.includes('Cheese')"
        (input)="
          $event.target.checked
            ? fillings.push($event.target.value)
            : fillings.splice(fillings.indexOf('Cheese'), 1)
        "
      />
      <input
        type="checkbox"
        value="Guac (extra)"
        [attr.checked]="fillings.includes('Guac (extra)')"
        (input)="
          $event.target.checked
            ? fillings.push($event.target.value)
            : fillings.splice(fillings.indexOf('Guac (extra)'), 1)
        "
      />
      <p>Tortilla: {{ tortilla }}</p>
      <p>Fillings: {{ fillings }}</p>
    </div>
  `,
})
export default class BindGroup {
  tortilla = 'Plain';
  fillings = [];
}
