import { Component } from '@angular/core';

@Component({
  selector: 'app-image-amtstar',
  templateUrl: './image-amtstar.component.html',
  styleUrl: './image-amtstar.component.css'
})
export class ImageAmtstarComponent {
  products = [
    {
      name: 'Chair',
      image: '../images/furniture/chair1.jpeg',
      ratingValue: 4,
      rating: Array(5),
      price: 1000,
      isLoved: false
    },
    {
      name: 'Gown',
      image: '../images/furniture/chair2.jpeg',
      ratingValue: 3,
      rating: Array(5),
      price: 1200,
      isLoved: false
    },
    {
      name: 'Long leave',
      image: '../images/furniture/chair2.jpeg',
      ratingValue: 4,
      rating: Array(5),
      price: 1200,
      isLoved: false
    },
    {
      name: 'Long Leave',
      image: '../images/furniture/chair3.jpeg',
      ratingValue: 4,
      rating: Array(5),
      price: 1200,
      isLoved: false
    }
  ];

  toggleLove(product: any) {
    product.isLoved = !product.isLoved;
  }
}
