import { Component } from '@angular/core';

@Component({
  selector: 'app-image-amtstar',
  templateUrl: './image-amtstar.component.html',
  styleUrl: './image-amtstar.component.css'
})
export class ImageAmtstarComponent {
  products = [
    {
      name: 'Shirt',
      image: '../images/clothes/p1.jpeg',
      ratingValue: 4,
      rating: Array(5),
      price: 1000,
      isLoved: false
    },
    {
      name: 'Gown',
      image: '../images/clothes/p3.png',
      ratingValue: 3,
      rating: Array(5),
      price: 1200,
      isLoved: false
    },
    {
      name: 'Long leave',
      image: '../images/clothes/p8.png',
      ratingValue: 4,
      rating: Array(5),
      price: 1200,
      isLoved: false
    },
    {
      name: 'Long Leave',
      image: '../images/clothes/p8.png',
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
