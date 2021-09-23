import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../commons/model/product';
import { Customer } from '../commons/model/customer';
import { BasketService } from './basket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  basket$!: Observable<Product[]>;
  customer: Customer;

  constructor(private router: Router, private basketService: BasketService) {
    this.basket$ = basketService.basket$;
    this.customer = new Customer();
  }

  checkout() {
    this.basketService.checkout();
    this.router.navigate(['']);
  }
}
