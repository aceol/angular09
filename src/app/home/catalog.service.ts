import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../commons/model/product';
import { getProductsFromNetwork } from './fake-server/products';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor() {}

  get(): Observable<Product[]> {
    return from(getProductsFromNetwork());
  }

  isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1;
  }
}
