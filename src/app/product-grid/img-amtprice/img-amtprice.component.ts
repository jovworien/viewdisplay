import { Component } from '@angular/core';

@Component({
  selector: 'app-img-amtprice',
  templateUrl: './img-amtprice.component.html',
  styleUrl: './img-amtprice.component.css'
})
export class ImgAmtpriceComponent {

  products = [
    {
      name: 'Hair',
      image: '../images/Hair/hair_1.jpeg',
      oldPrice: 1200, 
      newPrice: 1000
    },
    {
      name: 'Hair ',
      image: '../images/Hair/hair_3.jpeg',
      oldPrice: 1500, 
      newPrice: 1200 
    },
    {
      name: 'Woman hair',
      image: '../images/Hair/hair_2.jpeg',
      oldPrice: 1400, 
      newPrice: 1200  
    },
    {
      name: 'Hair',
      image: '../images/Hair/hair_5.jpeg',
      oldPrice: 1400, 
      newPrice: 1200  
    }
  ];
  
}
