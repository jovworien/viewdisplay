import { Component } from '@angular/core';

@Component({
  selector: 'app-img-amtnamestarbtn',
  templateUrl: './img-amtnamestarbtn.component.html',
  styleUrl: './img-amtnamestarbtn.component.css'
})
export class ImgAmtnamestarbtnComponent {
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
      name: 'Bed',
      image: '../images/furniture/chair3.jpeg',
      ratingValue: 3,
      rating: Array(5),
      price: 1200,
      isLoved: false
    },
    {
      name: 'House Items',
      image: '../images/furniture/chair2.jpeg',
      ratingValue: 4,
      rating: Array(5),
      price: 1200,
      isLoved: false
    }, 
    {
      name: 'Chairs',
      image: '../images/furniture/chair1.jpeg',
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
