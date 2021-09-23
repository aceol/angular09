import { Injectable } from '@angular/core';
import { Product } from '../commons/model/product';
import { getProductsFromNetwork } from './fake-server/products';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor() {}

  get(): Promise<Product[]> {
    return getProductsFromNetwork();
  }

  isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1;
  }
}
