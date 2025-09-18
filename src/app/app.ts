import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employed } from './pages/employed/employed';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Employed],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('toilet_utility');
}
