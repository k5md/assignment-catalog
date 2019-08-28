import _ from 'lodash';
import { Product } from './ProductModel';
import { PRODUCT_TYPES, PRODUCT_SIZES } from '../constants';

describe('ProductModel', () => {
  it('accepts types and sizes', () => {
    const initialState = {
      id: 0,
      type: PRODUCT_TYPES[0],
      name: 'nice mustbuy item',
      size: PRODUCT_SIZES[0],
      color: '#ffffff',
      inStock: true,
      dateReceipt: '10-10-2010',
    };

    const product = Product.create(initialState);

    expect(product).toHaveProperty('type', PRODUCT_TYPES[0]);
    expect(product).toHaveProperty('size', PRODUCT_SIZES[0]);
  })
});

