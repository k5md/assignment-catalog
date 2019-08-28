import { IProduct, Product, ProductModel } from '../models/ProductModel';
import { ProductStore } from './ProductStore';
import { FILTER_TYPES } from '../constants';

const createStoreWithoutFilters = (products) => ProductStore.create({
  _products: products.map((product): Array<ProductModel>  => {
    const preparedProduct: IProduct = {
      ...product,
      id: Number.parseInt(product.id),
    };
    // @ts-ignore
    return Product.create(preparedProduct);
  }),
});

const createStoreWithFilters = (products, filters) => ProductStore.create({
  _products: products.map((product): Array<ProductModel>  => {
    const preparedProduct: IProduct = {
      ...product,
      id: Number.parseInt(product.id),
    };
    // @ts-ignore
    return Product.create(preparedProduct);
  }),
  _filters: filters,
});

const products = [
  {
    "id":1,
    "name":"Маленький Хлопковый Берет",
    "type":"Белье",
    "color":"#a0764b",
    "size":"M",
    "inStock":false,
    "dateReceipt":"2018-12-25"
  },
  {
    "id":2,
    "name":"Невероятный Пластиковый Стул",
    "type":"Штанишки",
    "color":"#4c528a",
    "size":"S",
    "inStock":true,
    "dateReceipt":"2018-09-14"
  },
  {
    "id":3,
    "name":"Стул",
    "type":"Штанишки",
    "color":"#4c528a",
    "size":"L",
    "inStock":false,
    "dateReceipt":"2018-09-15"
  },
];

describe('productStoreModel', () => {
  it('returns all products if created without filters', () => {
    const store = createStoreWithoutFilters(products);
    expect(store.products).toEqual(products);
  })

  it(`returns filtered products when created with filters `, () => {
    const expected = {
      'ColorFilter': { valuesToSet: [ products[1].color ], resultsLength: 2 },
      'InStockFilter': { valuesToSet: [ products[0].inStock ], resultsLength: 2 },
      'SizeFilter': { valuesToSet: [ products[0].size ], resultsLength: 1 },
      'TypeFilter': { valuesToSet: [ products[1].type ], resultsLength: 2 },
      'InDateRangeFilter': { valuesToSet: [ '2018-09-13', '2018-12-24' ], resultsLength: 2 },
    };

    FILTER_TYPES.forEach((filterModel) => {
      const store = createStoreWithFilters(products, [filterModel.create()]);
      const filter = store._filters[0];
      const expectations = expected[filterModel.name];
      filter.setFilterValue(...expectations.valuesToSet);
      filter.toggle();
      expect(store.products).toHaveLength(expectations.resultsLength);
    })
  });
});
