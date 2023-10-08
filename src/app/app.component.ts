// app.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layered-carousel',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class LayeredCarouselComponent implements OnInit {
  carouselItems = [
    {
      image: './../assets/background-pink.png',
      caption: 'Slide 1'
    },
    {
      image: './../assets/backgroundold.png',
      caption: 'Slide 2'
    },
    {
      image: './../assets/background-pink.png',
      caption: 'Slide 3'
    }
  ];

  currentSlide = 0;
  cardWidth = 300; // Adjust the card width as needed

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
  }
}
