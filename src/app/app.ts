import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employed } from './pages/employed/employed';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Employed, NgxPaginationModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('toilet_utility');
}
