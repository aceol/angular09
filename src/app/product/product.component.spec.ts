import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Product } from '../model/product';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.data = new Product('title', 'description', 'photo', 42, 2);

    fixture.detectChanges();
  });

  it('should emit an event when button is clicked', function () {
      // given
      spyOn(component.addToBasket, 'emit');

      // when
      //component.addToBasketClick(); // class testing
      fixture.nativeElement.querySelector('button').click();

      // then
      expect(component.addToBasket.emit).toHaveBeenCalled();
  });

  it('should add last class when product\'s stock is 1', function () {
    // given
    expect(getItemClassList().contains('last')).toBeFalse();
    
    // when 
    component.data = new Product('title', 'description', 'photo', 42, 1);
    fixture.detectChanges();
    
    // then
    expect(getItemClassList().contains('last')).toBeTrue();
  });


  function getItemClassList(): DOMTokenList {
    return fixture.nativeElement.querySelector('div.product-item').classList;
  }
});


