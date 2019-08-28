import { types, Instance } from 'mobx-state-tree';
import {
  PRODUCT_TYPE_LITERAL,
  PRODUCT_SIZE_LITERAL,
  PRODUCT_TYPES,
  PRODUCT_SIZES,
} from '../constants';

export interface IProduct {
  id: number,
  type: PRODUCT_TYPE_LITERAL,
  name: string,
  size: PRODUCT_SIZE_LITERAL,
  color: string,
  inStock: boolean,
  dateReceipt: string,
}

export type ProductModel = Instance<typeof Product>;

export const Product = types
  .model({
    id: types.identifierNumber,
    type: types.enumeration(PRODUCT_TYPES),
    name: types.string,
    size: types.enumeration(PRODUCT_SIZES),
    color: types.string,
    inStock: types.boolean,
    dateReceipt: types.string,
  });

export default Product;
