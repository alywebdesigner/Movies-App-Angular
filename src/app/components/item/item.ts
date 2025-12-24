import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { CommonModule } from '@angular/common';
import { IMAGE_SIZES } from '../../constants/images-sizes';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'item',
  imports: [CommonModule, RouterLink],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})
export class Item {
  @Input() itemData: Movie | null = null;
  imagessizes = IMAGE_SIZES;
  constructor() {}
  ngOnInit(): void {}
}
