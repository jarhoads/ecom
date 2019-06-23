import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductListComponent } from './product-list.component';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { ProductItemComponent } from '../product-item/product-item.component';

describe('Product List Component', () => {

  describe('Isolated unit tests', () => {

    it('should create 3 products on init', () => {
      const component = new ProductListComponent();
      component.ngOnInit();
      expect(component.products.length).toEqual(3);
    });

    it('should find and update quantity onQuantityChange', () => {
      const component = new ProductListComponent();
      component.ngOnInit();

      assertProducts(component.products, [0, 0, 0]);
      component.onCartChange({ product: getProduct(2), changeQuantity: 2 });

      assertProducts(component.products, [0, 2, 0]);

      component.onCartChange({ product: getProduct(2), changeQuantity: 2 });
      component.onCartChange({ product: getProduct(1), changeQuantity: 1 });
      assertProducts(component.products, [1, 4, 0]);

      component.onCartChange({ product: getProduct(2), changeQuantity: -3 });
      assertProducts(component.products, [1, 1, 0]);
    });

    function assertProducts(products: Product[], expectedQuantities) {
      expect(products[0].id).toEqual(1);
      expect(products[0].inCart).toEqual(expectedQuantities[0]);
      expect(products[1].id).toEqual(2);
      expect(products[1].inCart).toEqual(expectedQuantities[1]);
      expect(products[2].id).toEqual(3);
      expect(products[2].inCart).toEqual(expectedQuantities[2]);
    }

    function getProduct(id: number): Product {
      return new Product(id, 'Test Product', 100, 'Random Image', false, 0);
    }
  });

  describe('Angular tests', () => {
    let fixture;
    let component;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ProductListComponent, ProductItemComponent]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ProductListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should render three product list items', () => {
      const productItems = fixture.debugElement.queryAll(By.css('app-product-item'));
      expect(productItems.length).toEqual(3);
      assertProduct(productItems[0], 'thing1', 20, 0);
      assertProduct(productItems[1], 'thing2', 25, 0);
      assertProduct(productItems[2], 'thing3', 30, 0);
    });

    it('should handle increment item correctly from child product', () => {
      const productItems = fixture.debugElement.queryAll(By.css('app-product-item'));

      assertProduct(productItems[1], 'thing2', 25, 0);
      const incrementBtnForSecondProduct = productItems[1].query(By.css('button.increment'));
      incrementBtnForSecondProduct.triggerEventHandler('click', null);
      fixture.detectChanges();
      assertProduct(productItems[1], 'thing2', 25, 1);
      expect(component.products[1].inCart).toEqual(1);

      const decrementBtnForSecondProduct = productItems[1].query(By.css('button.decrement'));
      decrementBtnForSecondProduct.triggerEventHandler('click', null);
      fixture.detectChanges();
      assertProduct(productItems[1], 'thing2', 25, 0);
      expect(component.products[1].inCart).toEqual(0);
    });

    function assertProduct(element, name, price, qty) {
      const nameEl = element.query(By.css('.name'));
      expect(nameEl.nativeElement.textContent).toEqual(name);
      const priceEl = element.query(By.css('.price'));
      expect(priceEl.nativeElement.textContent).toEqual('$ ' + price);
      const qtyEl = element.query(By.css('.qty'));
      expect(qtyEl.nativeElement.textContent).toEqual(qty + '');
    }
  });
});

