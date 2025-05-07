// src/app/item-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemService } from './services/item.service';
import { Item } from './models/item';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>{{ item?.name }}</h2>
    <p>{{ item?.description }}</p>
    <button (click)="edit()">Edit</button>
    <button (click)="remove()">Delete</button>
    <button routerLink="/items">Back</button>
  `,
})
export class ItemDetailComponent implements OnInit {
  item?: Item;
  id!: number;

  constructor(
    private readonly svc: ItemService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.get(this.id).subscribe((i) => (this.item = i));
  }

  edit() {
    this.router.navigate(['/items', this.id, 'edit']);
  }

  remove() {
    this.svc.delete(this.id).subscribe(() => this.router.navigate(['/items']));
  }
}
