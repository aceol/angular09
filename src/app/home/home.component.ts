import { Component, Inject } from '@angular/core';

import { Product } from '../model/product';
import { getProductsFromNetwork } from '../fake-server/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = [];

  constructor(@Inject('welcomeMsg') public title: string) {
    getProductsFromNetwork().then(products => {
      this.products = products;
    });

    if (!(window as any).basket) {
      (window as any).basket = [];
    }
  }

  getTotal(): number {
    return (window as any).basket.reduce((acc: number, next: Product) => acc + next.price, 0);
  }

  addToBasket(product: Product): void {
    (window as any).basket.push(product);
    product.stock--;
  }

  isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }
}
