// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ItemListComponent } from './item-list.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemFormComponent } from './item-form.component';

export const routes: Routes = [
  { path: 'items', component: ItemListComponent },
  { path: 'items/new', component: ItemFormComponent },
  { path: 'items/:id', component: ItemDetailComponent },
  { path: 'items/:id/edit', component: ItemFormComponent },
  { path: '', redirectTo: 'items', pathMatch: 'full' },
];
