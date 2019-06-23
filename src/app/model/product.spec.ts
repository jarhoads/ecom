import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(1, 'product1', 10, './', false, 0)).toBeTruthy();
  });
});
