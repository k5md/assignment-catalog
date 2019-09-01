import { Product } from './Product';
import { ProductStore } from './ProductStore';

const initialProducts = [
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
      _products: initialProducts.map((product): Array<Product>  => {
        const preparedProduct: Product = {
          ...product,
          type: product.type as Product['type'],
          size: product.size as Product['size'],
          id: product.id,
        };
        // @ts-ignore
        return Product.create(preparedProduct);
      }),
    });
    expect(store.products).toEqual(initialProducts);
  })
});
