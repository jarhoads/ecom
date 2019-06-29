import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];
  constructor() {
    this.products = [ new Product(1, 'thing1', 20, '/assets/images/uthapizza.png', false, 0),
                      new Product(2, 'thing2', 25, '/assets/images/uthapizza.png', true, 0),
                      new Product(3, 'thing3', 30, '/assets/images/uthapizza.png', false, 0) ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  createProduct(product: Product) {
    const foundProduct = this.products.find(p => p.id === product.id);
    if (foundProduct) { return false; }

    this.products.push(product);
    return true;
  }

  toggleSale(product: Product) {
    const foundProduct = this.products.find(p => p.id === product.id);
    foundProduct.onSale = !foundProduct.onSale;
  }

  cartChange(change: ProductQuantityChange) {
    const foundProduct = this.products.find(p => change.product.id === p.id);
    foundProduct.inCart += change.changeQuantity;
  }
}
