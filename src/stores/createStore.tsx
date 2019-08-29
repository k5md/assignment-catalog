import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { addMiddleware } from 'mobx-state-tree';
import { IProduct, Product } from './Product';
import { ProductStore } from './ProductStore'
import { FilterStore } from './FilterStore';
import { RootStore, RootStoreModel } from './RootStore';
import productsJson from '../../products.json';

export const log = store => addMiddleware(store, (call, next, abort) => {
  console.log(`action ${call.name} was invoked`, call);
  next(call);
});

export const createStore = (products) => {
  const productStore = ProductStore.create({
    _products: products.map((product) => {
      const preparedProduct: IProduct = {
        ...product,
        type: product.type as IProduct['type'],
        size: product.size as IProduct['size'],
        id: Number.parseInt(product.id),
      };
      // @ts-ignore
      return Product.create(preparedProduct);
    }),
  });
  const filterStore = FilterStore.create();

  const rootStore = RootStore.create({
    productStore,
    filterStore,
  })

  if (process.env.NODE_ENV === 'development') {
    log(rootStore);
  }

  return rootStore;
};

export type StoreType = RootStoreModel;

export const storeContext = React.createContext<StoreType | null>(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => createStore(productsJson));
  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};
