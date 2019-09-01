import { types, Instance } from 'mobx-state-tree';

export type Product = Instance<typeof Product>;

export const Product = types
  .model({
    id: types.identifierNumber,
    type: types.enumeration(['Верхняя одежда', 'Белье', 'Штанишки']),
    name: types.string,
    size: types.enumeration(['S', 'M', 'L', 'XL']),
    color: types.string,
    inStock: types.boolean,
    dateReceipt: types.string,
  })
  .views((self) => ({
    getProduct: () => { return self; }
  }));
