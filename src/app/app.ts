import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employed } from './pages/employed/employed';
import { NgxPaginationModule } from 'ngx-pagination';
import { Sidebar } from './components/sidebar/sidebar';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Employed, NgxPaginationModule, Sidebar, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('toilet_utility');
}
