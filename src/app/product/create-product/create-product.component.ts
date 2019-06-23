import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public product: Product;
  formSubmitted = false;

  constructor() {
    this.product = new Product(12345, 'test', 50, '', false, 0);
  }

  ngOnInit() {
  }

  createProduct(productForm: NgForm) {
    this.formSubmitted = true;

    console.log(`Product Form: ${JSON.stringify(productForm.value)}`);
    if (productForm.valid) {
      const formProd: Product = productForm.value.product;
      formProd.inCart = 0;
      this.product = formProd;
      console.log(`Creating Product: ${JSON.stringify(this.product)}`);
    } else {
      console.log('Error: product is in an invalid state');
    }
  }

}
