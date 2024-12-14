import { Component } from '@angular/core';

@Component({
  selector: 'app-four-inone',
  templateUrl: './four-inone.component.html',
  styleUrl: './four-inone.component.css'
})
export class FourInoneComponent {

  // Currently selected product details
  selectedProduct = {
    image: '../images/Hair/hair_1.jpeg',
    price: '₹1000',
    description: 'Good Hair is the ultimate solution for enhancing your look with a sleek, natural, and versatile style.'
  };

  // List of available products
  products = [
    {
      image: '../images/Hair/hair_1.jpeg',
      price: '₹1000',
      description: 'Good Hair is the ultimate solution for enhancing your look with a sleek, natural, and versatile style.'
    },
    {
      image: '../images/Hair/hair_2.jpeg',
      price: '₹1200',
      description: 'Premium Hair offers a soft, shiny, and long-lasting style for all-day comfort.'
    },
    {
      image: '../images/Hair/hair_3.jpeg',
      price: '₹1500',
      description: 'Elegant Hair is perfect for a bold, chic, and confident appearance.'
    },
    {
      image: '../images/Hair/hair_4.jpeg',
      price: '₹900',
      description: 'Affordable Hair gives you a budget-friendly option without compromising on quality.'
    }
  ];

  /**
   * Updates the main product details when a thumbnail is clicked.
   * @param product - The selected product object.
   */
  changeMainProduct(product: any): void {
    this.selectedProduct = product;
  }

  toggleLoveIcon(): void {
    const loveIcon = document.querySelector('.love-icon');
    if (loveIcon) {
      loveIcon.classList.toggle('liked');
    }
  }

}
