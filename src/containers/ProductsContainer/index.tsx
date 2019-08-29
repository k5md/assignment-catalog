import React from 'react';
import { ProductTable } from '../../components/ProductTable';
import { storeContext } from '../../stores/createStore';
import { useStoreData } from '../../utils/hooks';

export const ProductsContainer = () => {
  const products = useStoreData(storeContext, store => store, store => store.products);

  return (<ProductTable products={products} />);
}
