import { types, Instance } from 'mobx-state-tree';
import { Product, IProduct } from '../models/ProductModel';
import { FILTER_TYPES } from '../constants';

export type ProductStoreModel = Instance<typeof ProductStore>;

export interface IProductStore {
  products: Array<IProduct>,
}

export const ProductStore = types
  .model('ProductStore', {
    _products: types.array(Product),
    _filters: types.array(types.union(...FILTER_TYPES)),
  })
  .views((self) => ({
    get products(): Array<IProduct> {
      const filtered = self._filters.reduce(
        (acc, cur) => cur.isEnabled ? cur.filter(acc) : acc, self._products
      );
      return filtered;
    },
  }));

export default ProductStore;
