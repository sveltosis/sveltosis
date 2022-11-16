import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'raw-html, RawHtml',
  template: ` <div [innerHTML]="html"></div> `,
})
export class RawHtml {
  html = '<b>bold</b>';
}

@NgModule({
  declarations: [RawHtml],
  imports: [BrowserModule],
  exports: [RawHtml],
})
export class RawHtmlModule {}
