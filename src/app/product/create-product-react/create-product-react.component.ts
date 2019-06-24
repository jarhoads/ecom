import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Product } from 'src/app/model/product';

// counter for test instances
let counter = 1;

@Component({
  selector: 'app-create-product-react',
  templateUrl: './create-product-react.component.html',
  styleUrls: ['./create-product-react.component.css']
})
export class CreateProductReactComponent implements OnInit {

  public productForm: FormGroup;
  private product: Product;

  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.product = new Product(1, `Test ${counter++}`, 50, '/assets/images/test.png', false, 0);
  }

  createForm() {
    this.productForm = this.fb.group({
      id: [null, Validators.required],
      name: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(1)]],
      imagePath: ['', Validators.required],
      onSale: [false]
    });
  }

  get id() { return this.productForm.get('id'); }
  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }
  get imagePath() { return this.productForm.get('imagePath'); }
  get onSale() { return this.productForm.get('onSale'); }

  onSubmit() {
    this.formSubmitted = true;

    console.log(`Product Form: ${JSON.stringify(this.productForm.value)}`);
    if (this.productForm.valid) {
      const formProd: Product = this.productForm.value;
      formProd.inCart = 0;
      this.product = formProd;
      console.log(`Creating Product: ${JSON.stringify(this.product)}`);
    } else {
      console.log('Error: product is in an invalid state');
    }
  }

  loadStockFromServer() {
    this.product = new Product(2, `Test ${counter++}`, 20, '/assets/images/test2.png', true, 0);
    const productFormModel = Object.assign({}, this.product);

    // add these back in by adding the FormControl elements to the form
    delete productFormModel.inCart;
    this.productForm.setValue(productFormModel);
  }

  patchStockForm() {
    this.product = new Product(3, `Test ${counter++}`, 30, '/assets/images/test2.png', true, 0);
    this.productForm.patchValue(this.product);
  }

  resetForm() {
    this.productForm.reset();
  }

  ngOnInit() {
  }

}
