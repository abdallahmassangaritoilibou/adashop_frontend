// src/app/items/items.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing.module';

// standalone components
import { ItemListComponent } from './item-list.component';
import { ItemFormComponent } from './item-form.component';
import { ItemDetailComponent } from './item-detail.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  // ← no declarations for standalone components
  imports: [
    CommonModule,
    FormsModule,

    // PrimeNG modules
    ButtonModule,
    CardModule,

    // standalone components must go in imports
    ItemListComponent,
    ItemFormComponent,
    ItemDetailComponent,

    // your routes last
    ItemsRoutingModule,
  ],
})
export class ItemsModule {}
