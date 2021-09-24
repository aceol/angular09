import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CatalogService } from '../catalog.service';

import { Product } from '../../commons/model/product';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('stockStatus', [
      state('available', style({ 'background-color': 'white' })),
      state('last', style({ 'background-color': 'red' })),
      transition('available => last', animate(1500)),
    ]),
  ],
})
export class ProductComponent {
  @Input() data = {} as Product;
  @Output() addToBasket = new EventEmitter<Product>();

  constructor(private catalogService: CatalogService) {}

  addToBasketClick(): void {
    this.addToBasket.emit(this.data);
  }

  isTheLast(): boolean {
    return this.catalogService.isTheLast(this.data);
  }
}
