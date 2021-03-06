import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor() { }

  refreshPage() {
    location.reload();
  }

  ngOnInit() {
    this.stickyHeader();
  }

  stickyHeader() {
    (function () {
      $('.header').sticky({
        topSpacing: 0
      });
        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
         });
    }());
  }
}
