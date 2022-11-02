import { Component } from '@angular/core';

@Component({
  selector: 'raw-html, RawHtml',
  template: ` <div [innerHTML]="html"></div> `,
})
export default class RawHtml {
  html = '<b>bold</b>';
}
