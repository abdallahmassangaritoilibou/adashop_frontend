// src/app/services/item.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private readonly base = `${environment.apiBaseUrl}/api/v1/items`;
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.base);
  }
  get(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.base}/${id}`);
  }
  create(item: Partial<Item>): Observable<Item> {
    return this.http.post<Item>(this.base, item);
  }
  update(id: number, item: Partial<Item>): Observable<Item> {
    return this.http.patch<Item>(`${this.base}/${id}`, item);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
