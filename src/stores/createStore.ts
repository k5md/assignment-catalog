import { IProduct, Product } from './Product';
import { ProductStore } from './ProductStore'
import { FilterStore } from './FilterStore';
import { RootStore } from './RootStore';

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
