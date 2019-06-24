import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductReactComponent } from './create-product-react.component';

describe('CreateProductReactComponent', () => {
  let component: CreateProductReactComponent;
  let fixture: ComponentFixture<CreateProductReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
