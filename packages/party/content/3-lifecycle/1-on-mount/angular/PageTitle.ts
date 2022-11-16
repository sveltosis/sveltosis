import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component } from '@angular/core';

@Component({
  selector: 'page-title, PageTitle',
  template: ` <p>Page title is: {{ pageTitle }}</p> `,
})
export class PageTitle {
  pageTitle = '';

  ngOnInit() {
    this.pageTitle = document.title;
  }
}

@NgModule({
  declarations: [PageTitle],
  imports: [BrowserModule],
  exports: [PageTitle],
})
export class PageTitleModule {}
