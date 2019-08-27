import { IProduct, Product } from '../models/ProductModel';
import { ProductStore } from './ProductStore';
import productsJson from '../../products.json';
import { ColorFilter, InStockFilter } from '../models/FilterModel';

export const createStores = () => {
  const productStore = ProductStore.create({
    _products: productsJson.map((product)  => {
      const preparedProduct: IProduct = {
        ...product,
        id: Number.parseInt(product.id),
      };
      return Product.create(preparedProduct);
    }),
    _filters: [ColorFilter, InStockFilter].map(filter => filter.create()),
  });

  return { productStore };
};
