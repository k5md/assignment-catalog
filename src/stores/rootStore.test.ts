import _ from 'lodash';
import { RootStore } from './RootStore';

const products = [
  {
    "id": 1,
    "name":"Маленький Хлопковый Берет",
    "type":"Штанишки",
    "color":"#a0764b",
    "size": 'M',
    "inStock":false,
    "dateReceipt":"2018-12-25"
  },
  {
    "id": 2,
    "name":"Невероятный Пластиковый Стул",
    "type":"Белье",
    "color":"#4c528a",
    "size": 'S',
    "inStock":true,
    "dateReceipt":"2018-09-14"
  },
];

import { ProductStore } from './ProductStore';
import { FilterStore } from './FilterStore';
import { Product } from './Product';

describe('RootStore', () => {
  jest.mock('./ProductStore');
  jest.mock('./FilterStore');
  const _products = products.map(product => Product.create(product))
  const productStore = ProductStore.create({ _products });
  const filterStore = FilterStore.create();

  it('creates rootStore with products and filters', () => {
    const rootStore = RootStore.create({ productStore, filterStore });
    expect(rootStore.productStore).toEqual(productStore);
    expect(rootStore.filterStore).toEqual(filterStore);
  });
});
