import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data = {} as Product;
  @Output() addToBasket = new EventEmitter<Product>();

  addToBasketClick(): void {
    this.addToBasket.emit(this.data);
  }

  isTheLast(): boolean {
    return this.data.stock === 1;
  }

}
