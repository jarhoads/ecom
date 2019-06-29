import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  public cart: number[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.products.forEach((p, i) => this.cart.push(0));
  }

  onCartChange(change: ProductQuantityChange) {
    this.productService.cartChange(change);
  }

}
