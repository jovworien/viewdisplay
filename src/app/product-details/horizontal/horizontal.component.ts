import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrl: './horizontal.component.css'
})
export class HorizontalComponent {
  toggleLoveIcon(): void {
    const loveIcon = document.querySelector('.love-icon');
    if (loveIcon) {
      loveIcon.classList.toggle('liked');
    }
  }
}
