import { Component } from '@angular/core';

@Component({
  selector: 'page-title, PageTitle',
  template: ` <p>Page title is: {{ pageTitle }}</p> `,
})
export default class PageTitle {
  pageTitle = '';

  ngOnInit() {
    this.pageTitle = document.title;
  }
}
