import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { Product } from '../model/product';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent, ProductItemComponent, Product ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create the component', () => {
    // component.product = new Product(1, 'product1', 10, './', false, 0);
    expect(component).toBeTruthy();
  });
});
