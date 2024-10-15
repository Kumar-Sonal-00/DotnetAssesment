import { Component } from '@angular/core';
import { Router, RouterModule, ROUTES } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-management-app';
}
