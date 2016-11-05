import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html'
})
export class ReferencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.carousel();
    this.blockCarousel();
  }

  carousel() {
    $('#testimonial-carousel').owlCarousel({
      navigation: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: window,
      pagination: true,
      singleItem: true
    });
  }

  blockCarousel() {
    $('#block-slider').owlCarousel({
      // navigation: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: window,
      pagination: false,
      singleItem: true,
      navigation: true,
      navigationText: ['<span class="icon-left-open-big"></span>', '<span class="icon-right-open-big"></span>']
    });
  }




}
