import { Component } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrl: './display3.component.css'
})
export class Display3Component {

  cartItems = [
    { name: 'Chair', image: '../images/furniture/chair1.jpeg', price: 1000, quantity: 1 },
    { name: 'Bed', image: '../images/furniture/chair3.jpeg', price: 1200, quantity: 1 },
    { name: 'House Items', image: '../images/furniture/chair2.jpeg', price: 1200, quantity: 1 },
    { name: 'Chairs', image: '../images/furniture/chair1.jpeg', price: 1200, quantity: 1 }
  ];

  updateCart() {
    // Logic to update cart when quantity changes
    console.log('Cart updated!');
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

}
