import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component, Input } from '@angular/core';

const defaultProps = {};

@Component({
  selector: 'user-profile, UserProfile',
  template: `
    <ng-container>
      <p>My name is {{ name }} !</p>
      <p>My age is {{ age }} !</p>
      <p>My favourite colors are {{ favouriteColors.join(', ') }} !</p>
      <p>I am {{ isAvailable ? 'available' : 'not available' }}</p>
    </ng-container>
  `,
})
export class UserProfile {
  @Input() name: any;
  @Input() age: any;
  @Input() favouriteColors: any;
  @Input() isAvailable: any;
}

@NgModule({
  declarations: [UserProfile],
  imports: [BrowserModule],
  exports: [UserProfile],
})
export class UserProfileModule {}
