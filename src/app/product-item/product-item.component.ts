import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  public product: Product;

  // @Input()
  // public index: number;

  // @Input()
  // public quantity: number;

  @Output()
  private quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter();

  // @Output()
  // private removeFromCart: EventEmitter<number>;

  public quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  constructor() {
    // this.addToCart = new EventEmitter<number>();
    // this.removeFromCart = new EventEmitter<number>();
  }

  ngOnInit() {
    // this.quantity = 0;
  }

  productClasses(i: number) {
    return {
      'sale-text': this.product.onSale,
      'no-sale-text': !this.product.onSale
    };
  }

  toggleSale(event, index) {
    console.log('We are toggling the sale state for this product', event);
    this.product.onSale = !this.product.onSale;
  }

  onAddToCart(event) {
    console.log(`We are adding this product to the cart: ${this.product}  ${event}`);
    this.quantityChange.emit({product: this.product, changeQuantity: 1});
  }

  onRemoveFromCart(event, index) {
    console.log('We are removing this product from the cart' + this.product + ' ' + event);
    if (this.product.inCart > 0) { this.quantityChange.emit({product: this.product, changeQuantity: -1}); }

  }



}
