import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../commons/model/product';
import { Customer } from '../commons/model/customer';
import { BasketService } from './basket.service';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basket$!: Observable<Product[]>;
  customer!: Customer;
  myForm!: FormGroup;
  user!: Customer;

  constructor(
    private router: Router,
    private basketService: BasketService,
    private fb: FormBuilder
  ) {
    this.user = new Customer(
      'XX',
      'XX',
      '999-999',
      'NE DEVRAIT PAS ETRE ECRASE'
    );
  }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.customer = new Customer();

    this.myForm = this.fb.group({
      name: this.fb.control(this.user.name, [Validators.required]),
      address: this.fb.control(this.user.address, [Validators.required]),
      creditCard: this.fb.control(this.user.creditCard, [
        Validators.required,
        Validators.pattern(/^\d{3}-\d{3}$/),
      ]),
    });
  }

  isRequired(fieldName: string) {
    return this.myForm.get(fieldName)?.errors?.required;
  }

  checkout() {
    if (this.myForm.valid) {
      const updateCustomer = Customer.build({
        ...this.user,
        ...this.myForm.value,
      });

      this.basketService.checkout();
      this.router.navigate(['']);
    }
  }
}
