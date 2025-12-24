import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie';
import { trigger, transition, style, animate } from '@angular/animations';
import { IMAGE_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'slider',
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class Slider implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;
  currentSliderIndex: number = 0;
  readonly imagessizes = IMAGE_SIZES;
  ngOnInit(): void {
    if (!this.isBanner) {
      // You can add initialization logic here if needed
      setInterval(() => {
        this.currentSliderIndex = ++this.currentSliderIndex % this.items.length;
      }, 5000);
    }
  }
}
