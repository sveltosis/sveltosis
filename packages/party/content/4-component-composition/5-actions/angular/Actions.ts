import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'actions, Actions',
  template: ` <button #button0>{{ buttonText }}</button> `,
})
export class Actions {
  @ViewChild('button0') button0: ElementRef;

  buttonText = 'Click Me';
  onClick = function onClick(node, args) {
    console.log('Mounted', node);
    return {
      update() {
        console.log('Updated', args);
      },
      destroy() {
        console.log('Destroyed', node);
      },
    };
  };
  actionHandler0 = null;

  ngOnInit() {
    if (this.button0.nativeElement) {
      this.actionHandler0 = this.onClick(this.button0.nativeElement, this.buttonText);
    }
  }

  ngAfterContentChecked() {
    if (!this.button0.nativeElement && this.actionHandler0) {
      this.actionHandler0?.destroy();
      this.actionHandler0 = null;
    } else if (this.button0.nativeElement && !this.actionHandler0) {
      if (this.button0.nativeElement) {
        this.actionHandler0 = this.onClick(this.button0.nativeElement, this.buttonText);
      }
    }

    this.actionHandler0?.update(this.buttonText);
  }
}

@NgModule({
  declarations: [Actions],
  imports: [BrowserModule],
  exports: [Actions],
})
export class ActionsModule {}
