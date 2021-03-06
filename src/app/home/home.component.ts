import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from '../basket/basket.service';

import { Product } from '../commons/model/product';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('productAnim', [
      transition(
        ':leave',
        animate(1000, style({ transform: 'translate(100%)' }))
      ),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  products$!: Observable<Product[]>;
  total!: number;

  constructor(
    @Inject('welcomeMsg') public title: string,
    private catalogService: CatalogService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.products$ = this.catalogService.get();

    this.basketService.getTotal().subscribe((number) => {
      this.total = number;
    });
  }

  addToBasket(product: Product): void {
    this.basketService.add(product);
  }

  trackByProduct(_: number, product: Product) {
    return product.title;
  }

  isAvailable(product: Product): boolean {
    return this.catalogService.isAvailable(product);
  }
}
