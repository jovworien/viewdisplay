import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-slider-display',
  templateUrl: './slider-display.component.html',
  styleUrl: './slider-display.component.css'
})
export class SliderDisplayComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  images = [
    {
      url: '../images/hero-images/hero1.png',
      alt: 'Exclusive Styles',
      text: 'Discover New Arrivals - Explore exclusive collections.',
    },
    {
      url: '../images/hero-images/hero4.png',
      alt: 'Best Deals',
      text: 'Unbeatable Prices - Shop and save more.',
    },
    {
      url: '../images/hero-images/hero3.png',
      alt: 'Customer Favorites',
      text: 'Shop Your Favorites - Find all you need in one place.',
    },
  ];

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

