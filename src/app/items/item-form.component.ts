// src/app/item-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <h2>{{ id ? 'Edit' : 'New' }} Item</h2>
    <form (ngSubmit)="save()">
      <label>Name: <input [(ngModel)]="item.name" name="name" /></label><br />
      <label
        >Description:
        <textarea
          [(ngModel)]="item.description"
          name="description"
        ></textarea></label
      ><br />
      <button type="submit">Save</button>
      <button (click)="cancel()">Cancel</button>
    </form>
  `,
})
export class ItemFormComponent implements OnInit {
  item: Partial<Item> = {};
  id?: number;
  constructor(
    private readonly svc: ItemService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.svc.get(this.id).subscribe((i) => (this.item = i));
    }
  }

  save() {
    const op = this.id
      ? this.svc.update(this.id, this.item)
      : this.svc.create(this.item);
    op.subscribe(() => this.router.navigate(['/items']));
  }
  cancel() {
    this.router.navigate(['/items']);
  }
}
