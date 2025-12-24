import { Component, Input } from '@angular/core';
import { Item } from '../item/item';
import { Movie } from '../../models/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'itemscards',
  imports: [Item, CommonModule], // Include CommonModule here
  templateUrl: './itemscards.html',
  styleUrl: './itemscards.scss',
})
export class ItemsCards {
  @Input() items: Movie[] = [];
  @Input() title: string = '';
}
