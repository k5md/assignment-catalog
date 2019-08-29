import { types, Instance } from 'mobx-state-tree';

import { IProduct } from './Product';
import { ProductStore } from './ProductStore';
import { FilterStore } from './FilterStore';

export interface IRootStore {
  products: Array<ProductStore>,
}

export const RootStore = types
  .model('RootStore', {
    productStore: ProductStore,
    filterStore: FilterStore,
  })
  .views((self) => ({
    get products(): Array<IProduct> {
      const p = self.productStore.products;
      const f = self.filterStore.filters;
      return f(p);
    },
  }));

  export type RootStoreModel = Instance<typeof RootStore>;


export default RootStore;
