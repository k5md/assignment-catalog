import { types, Instance } from 'mobx-state-tree';
import { Product } from './Product';

export type ProductStore = Instance<typeof ProductStore>;

export const ProductStore = types
  .model('Product', {
    _products: types.array(Product),
  })
  .views((self) => ({
    get products() {
      return self._products.map(product => product.getProduct());
    },
  }));
