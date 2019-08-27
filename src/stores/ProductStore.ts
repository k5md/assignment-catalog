import { Product, IProduct } from '../models/ProductModel';
import { types, Instance, cast } from 'mobx-state-tree';
import { ColorFilter, InStockFilter } from '../models/FilterModel';
export type ProductStoreModel = Instance<typeof ProductStore>;

export const ProductStore = types
  .model('ProductStore', {
    _products: types.array(Product),
    _filters: types.array(types.union(ColorFilter, InStockFilter)),
  })
  .views((self) => ({
    get products(): Array<IProduct> {
      console.log(self._products);
      const filtered = self._filters.reduce(
        (acc, cur) => cur.isEnabled ? cur.filter(acc) : acc, self._products
      );
      console.log(filtered);
      return filtered;
    },
  }));

export default ProductStore;
