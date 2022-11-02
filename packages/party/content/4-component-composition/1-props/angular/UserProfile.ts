import { Component, Input } from '@angular/core';

const defaultProps = {};

@Component({
  selector: 'user-profile, UserProfile',
  template: `
    <div>
      <p>My name is {{ name }} !</p>
      <p>My age is {{ age }} !</p>
      <p>My favourite colors are {{ favouriteColors.join(', ') }} !</p>
      <p>I am {{ isAvailable ? 'available' : 'not available' }}</p>
    </div>
  `,
})
export default class UserProfile {
  @Input() name: any;
  @Input() age: any;
  @Input() favouriteColors: any;
  @Input() isAvailable: any;
}
