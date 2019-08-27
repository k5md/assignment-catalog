import { types } from 'mobx-state-tree';

export interface IProduct {
  id: number,
  name: string,
  color: string,
  inStock: boolean,
  dateReceipt: string,
}

export const Product = types
  .model({
    id: types.identifierNumber,
    name: types.string,
    color: types.string,
    inStock: types.boolean,
    dateReceipt: types.string,
  });

export default Product;
