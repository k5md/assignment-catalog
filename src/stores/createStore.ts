import { IProduct, Product, ProductModel } from '../models/ProductModel';
import { ProductStore } from './ProductStore';
import { FILTER_TYPES } from '../constants';

export const createStore = (products) => {
  const productStore = ProductStore.create({
    _products: products.map((product): Array<ProductModel>  => {
      const preparedProduct: IProduct = {
        ...product,
        id: Number.parseInt(product.id),
      };
      // @ts-ignore
      return Product.create(preparedProduct);
    }),
    _filters: FILTER_TYPES.map(filter => filter.create()),
  });

  return { productStore };
};
