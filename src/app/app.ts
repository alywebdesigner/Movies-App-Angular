import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { PaginatorModule } from 'primeng/paginator';
import { TabsModule } from 'primeng/tabs';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, PaginatorModule, TabsModule, ImageModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('movies-app');
}
