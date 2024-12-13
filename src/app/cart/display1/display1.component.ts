import { Component } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrl: './display1.component.css'
})
export class Display1Component {

  cartItems = [
    {
      name: 'Shirt',
      image: '../images/clothes/p1.jpeg',
      price: 1000,
      quantity: 1
    },
    {
      name: 'Gown',
      image: '../images/clothes/p3.png',
      price: 1200,
      quantity: 1
    }
  ];

  // Calculate total price of the cart
  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Remove an item from the cart
  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  // Update the cart when quantity changes
  updateCart(): void {
    // Logic to handle cart updates, if necessary
  }

}
