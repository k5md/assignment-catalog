import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { addMiddleware } from 'mobx-state-tree';
import { Product } from './Product';
import { ProductStore } from './ProductStore'
import { FilterStore } from './FilterStore';
import { RootStore } from './RootStore';
import productsJson from '../../products.json';
import { DateRangeFilter, TypeFilter, SizeFilter, StockFilter } from './Filter';

export const log = store => addMiddleware(store, (call, next, abort) => {
  console.log(`action ${call.name} was invoked`, call);
  next(call);
});

export const createStore = (products) => {
  const productStore = ProductStore.create({
    _products: products.map((product) => {
      const preparedProduct: Product = {
        ...product,
        type: product.type as Product['type'],
        size: product.size as Product['size'],
        id: Number.parseInt(product.id),
      };
      return Product.create(preparedProduct);
    }),
  });

  const filterStore = FilterStore.create({
    _filters: [
      StockFilter.create(),
      DateRangeFilter.create(),
      TypeFilter.create(),
      SizeFilter.create(),
    ],
  });

  const rootStore = RootStore.create({
    productStore,
    filterStore,
  })

  if (process.env.NODE_ENV === 'development') {
    log(rootStore);
  }

  return rootStore;
};

export const storeContext = React.createContext<RootStore | null>(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => createStore(productsJson));
  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};
