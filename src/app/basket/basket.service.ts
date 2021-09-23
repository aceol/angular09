import { Injectable } from '@angular/core';
import { Product } from '../commons/model/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  //basket: Product[] = [];
  private _basket$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    []
  );

  basket$: Observable<Product[]> = this._basket$.asObservable();

  constructor() {}

  getTotal(): Observable<number> {
    return this._basket$.pipe(
      map((products: Product[]) =>
        products.reduce((acc: number, next: Product) => acc + next.price, 0)
      )
    );
  }

  add(product: Product) {
    product.stock--;
    const currentBasket = this._basket$.value;
    this._basket$.next([...currentBasket, product]);
  }

  checkout() {
    this._basket$.next([]);
  }
}
