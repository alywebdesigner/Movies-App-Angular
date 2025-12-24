import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ActivatedRoute } from '@angular/router';
import { TvShowsService } from '../../services/tvshows';
import { ItemsCards } from '../../components/itemscards/itemscards';
import { Item } from '../../components/item/item';

@Component({
  selector: 'app-tvshows',
  standalone: true,
  templateUrl: './tvshows.html',
  styleUrls: ['./tvshows.scss'],
  imports: [
    CommonModule,
    PaginatorModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormsModule,
    Item,
  ],
})
export class TvShows implements OnInit {
  tvshows: any[] = [];
  genreId: string | null = null;
  searchValue: string = '';
  currentPage: number = 0;
  totalRecords: number = 0;
  first: number = 0;
  rows: number = 20;

  constructor(private tvShowsService: TvShowsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ generId }) => {
      this.genreId = generId;
      if (generId) {
        this.gettvShowsByGenre(generId, 1);
      } else {
        this.paginate({ page: 0 });
      }
    });
  }

  paginate(event: PaginatorState | any, searchkeyvalue?: string) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.gettvShowsByGenre(this.genreId, pageNumber);
    } else {
      this.tvShowsService
        .searchTvShows(pageNumber, searchkeyvalue || this.searchValue || undefined)
        .subscribe((tvshows) => {
          this.tvshows = tvshows;
        });
    }
  }

  gettvShowsByGenre(genreId: string, page: number) {
    this.tvShowsService.getTvShowsByGenre(genreId, page).subscribe((tvshows) => {
      this.tvshows = tvshows;
    });
  }

  searchChanged() {
    this.currentPage = 0;
    this.first = 0;
    this.paginate({ page: 0 }, this.searchValue);
  }
}
