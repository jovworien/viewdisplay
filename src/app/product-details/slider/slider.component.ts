import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {

   // List of image URLs
   images: string[] = [
    '../images/Hair/hair_1.jpeg',
    '../images/Hair/hair_2.jpeg',
    '../images/Hair/hair_3.jpeg'
  ];

  currentImageIndex: number = 0;
  imageInterval: any;

  ngOnInit(): void {
    // Start the image swiper
    this.startImageSwiper();
  }

  startImageSwiper(): void {
    const imageElement = document.getElementById('productImage') as HTMLImageElement;

    this.imageInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      if (imageElement) {
        imageElement.src = this.images[this.currentImageIndex];
      }
    }, 3000); // Change image every 3 seconds
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }
}
