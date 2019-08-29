import { IProduct, Product } from './Product';
import { ProductStore } from './ProductStore';

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
    const store = ProductStore.create({
      _products: products.map((product): Array<Product>  => {
        const preparedProduct: IProduct = {
          ...product,
          type: product.type as IProduct['type'],
          size: product.size as IProduct['size'],
          id: product.id,
        };
        // @ts-ignore
        return Product.create(preparedProduct);
      }),
    });
    expect(store.products).toEqual(products);
  })
});
