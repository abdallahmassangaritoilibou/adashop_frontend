// src\app\app.component.ts

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToastModule, // for <p-toast>
    ButtonModule, // for <p-button>
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private readonly primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }

  title = 'adashop-frontend';

  toggleDarkMode() {
    document.documentElement.classList.toggle('p-app-dark');
  }
}
