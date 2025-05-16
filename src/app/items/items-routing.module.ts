// src\app\items\items-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemListComponent } from './item-list.component';
import { ItemFormComponent } from './item-form.component';
import { ItemDetailComponent } from './item-detail.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'new', component: ItemFormComponent },
  { path: ':id', component: ItemDetailComponent },
  { path: ':id/edit', component: ItemFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
