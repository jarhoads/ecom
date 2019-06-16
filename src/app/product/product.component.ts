import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[];
  public cart: number[] = [];
  public quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  constructor() { }

  ngOnInit() {
    this.products = [new Product('thing1', 20, '/assets/images/uthapizza.png', false),
                     new Product('thing2', 25, '/assets/images/uthapizza.png', true),
                     new Product('thing3', 30, '/assets/images/uthapizza.png', false)];
    this.products.forEach((p, i) => this.cart.push(0));
  }

  productClasses(i: number) {
    return {
      'sale-text': this.products[i].onSale,
      'no-sale-text': !this.products[i].onSale
    };
  }

  toggleSale(event, index) {
    console.log('We are toggling the sale state for this product', event);
    this.products[index].onSale = !this.products[index].onSale;
  }

  addToCart(event, index) {
    console.log('We are adding this product to the cart', event);
    this.cart[index]++;
  }

  removeFromCart(event, index) {
    console.log('We are removing this product from the cart', event);
    if (this.cart[index] > 0) { this.cart[index]--; } else { this.cart[index] = 0; }
  }

}
