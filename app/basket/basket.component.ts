import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../model/product';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  basket: Product[] = [];
  customer: Customer;

  constructor(private router: Router) {
    this.basket = (window as any).basket;
    this.customer = new Customer();
  }

  checkout() {
    (window as any).basket = [];
    this.router.navigate(['']);
  }
}
