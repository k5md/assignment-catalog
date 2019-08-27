import { types } from 'mobx-state-tree';

export interface IProduct {
  id: number,
  type: 'Верхняя одежда' | 'Белье' | 'Штанишки',
  name: string,
  size: 'S' | 'M' | 'L' | 'XL',
  color: string,
  inStock: boolean,
  dateReceipt: string,
}

export const Product = types
  .model({
    id: types.identifierNumber,
    type: types.enumeration(['Верхняя одежда', 'Белье', 'Штанишки']),
    name: types.string,
    size: types.enumeration(['S', 'M', 'L', 'XL']),
    color: types.string,
    inStock: types.boolean,
    dateReceipt: types.string,
  });

export default Product;
