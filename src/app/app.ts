import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthForm} from './auth/auth-form/auth-form';
import {Navbar} from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthForm, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('auth-frontend-angular');
}
