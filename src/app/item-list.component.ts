// src/app/item-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemService } from './services/item.service';
import { Item } from './models/item';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Items</h2>
    <ul>
      <li *ngFor="let it of items">
        <a [routerLink]="['/items', it.id]">{{ it.name }}</a>
      </li>
    </ul>
    <button routerLink="/items/new">New Item</button>
  `,
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  constructor(private readonly svc: ItemService) {}
  ngOnInit() {
    this.svc.getAll().subscribe((data) => (this.items = data));
  }
}
