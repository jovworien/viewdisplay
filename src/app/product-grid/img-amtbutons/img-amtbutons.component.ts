import { Component } from '@angular/core';

interface Product {
  title: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
  isOnSale: boolean;
}

@Component({
  selector: 'app-img-amtbutons',
  templateUrl: './img-amtbutons.component.html',
  styleUrl: './img-amtbutons.component.css'
})
export class ImgAmtbutonsComponent  {
  products: Product[] = [
    {
      title: 'Gown',
      price: 1000,
      imageUrl: '../images/clothes/p3.png',
      isNew: true,
      isOnSale: true
    },
    {
      title: 'Long Leave',
      price: 1000,
      imageUrl: '../images/clothes/p1.jpeg',
      isNew: true,
      isOnSale: true
    },
    {
      title: 'HandLess Gown',
      price: 1000,
      imageUrl: '../images/clothes/p4.png',
      isNew: true,
      isOnSale: true
    }
  ];


}
