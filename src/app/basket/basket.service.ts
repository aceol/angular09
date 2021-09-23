import { Injectable } from '@angular/core';
import { Product } from '../commons/model/product';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: Product[] = [];

  constructor() {}

  getTotal(): number {
    return this.basket.reduce(
      (acc: number, next: Product) => acc + next.price,
      0
    );
  }

  add(product: Product) {
    this.basket.push(product);
    product.stock--;
  }

  checkout() {
    this.basket.length = 0;
  }
}
