import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  public cart: number[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [new Product(1, 'thing1', 20, '/assets/images/uthapizza.png', false, 0),
                     new Product(2, 'thing2', 25, '/assets/images/uthapizza.png', true, 0),
                     new Product(3, 'thing3', 30, '/assets/images/uthapizza.png', false, 0)];
    this.products.forEach((p, i) => this.cart.push(0));
  }

  onCartChange(change: ProductQuantityChange) {
    const product = this.products.find(p => change.product.id === p.id);
    product.inCart += change.changeQuantity;
  }

}
