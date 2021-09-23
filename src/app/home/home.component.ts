import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BasketService } from '../basket/basket.service';

import { Product } from '../commons/model/product';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products$!: Observable<Product[]>;
  total$!: Observable<number>;
  //total$: Observable<number>;

  constructor(
    @Inject('welcomeMsg') public title: string,
    private catalogService: CatalogService,
    private basketService: BasketService
  ) {
    this.products$ = this.catalogService.get();

    this.total$ = this.basketService.getTotal().pipe(tap(console.log));
  }

  addToBasket(product: Product): void {
    this.basketService.add(product);
  }

  isAvailable(product: Product): boolean {
    return this.catalogService.isAvailable(product);
  }
}
