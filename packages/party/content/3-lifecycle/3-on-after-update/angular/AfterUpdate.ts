import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'after-update, AfterUpdate',
  template: ` <ng-container></ng-container> `,
})
export class AfterUpdate {
  ngAfterContentChecked() {
    console.log('updated');
  }
}

@NgModule({
  declarations: [AfterUpdate],
  imports: [BrowserModule],
  exports: [AfterUpdate],
})
export class AfterUpdateModule {}
