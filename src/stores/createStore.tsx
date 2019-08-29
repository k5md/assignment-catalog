import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { IProduct, Product } from './Product';
import { ProductStore } from './ProductStore'
import { FilterStore } from './FilterStore';
import { RootStore, RootStoreModel } from './RootStore';
import productsJson from '../../products.json';

export const createStore = (products) => {
  const productStore = ProductStore.create({
    _products: products.map((product) => {
      const preparedProduct: IProduct = {
        ...product,
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
