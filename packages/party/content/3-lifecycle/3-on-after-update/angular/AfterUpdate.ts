import { Component } from '@angular/core';

@Component({
  selector: 'after-update, AfterUpdate',
  template: ` <div></div> `,
})
export default class AfterUpdate {
  ngAfterContentChecked() {
    console.log('updated');
  }
}
