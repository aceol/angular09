import { Component, Inject } from '@angular/core';
import { BasketService } from '../basket/basket.service';

import { Product } from '../commons/model/product';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: Product[] = [];

  constructor(
    @Inject('welcomeMsg') public title: string,
    private catalogService: CatalogService,
    private basketService: BasketService
  ) {
    this.catalogService.get().then((products) => {
      this.products = products;
    });
  }

  getTotal(): number {
    return this.basketService.getTotal();
  }

  addToBasket(product: Product): void {
    this.basketService.add(product);
  }

  isAvailable(product: Product): boolean {
    return this.catalogService.isAvailable(product);
  }
}
