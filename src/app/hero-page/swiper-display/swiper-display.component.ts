import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-swiper-display',
  templateUrl: './swiper-display.component.html',
  styleUrl: './swiper-display.component.css'
})
export class SwiperDisplayComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      new Swiper('.hero-swiper', {
        loop: true,
        speed: 800,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }


}
