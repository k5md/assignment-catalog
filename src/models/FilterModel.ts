import { types } from 'mobx-state-tree';

export const Filter = types
  .model({
    isEnabled: false,
    color: '#ffffff',
    inStock: false,
  })
  .actions((self) => {
    const toggle = () => {
      self.isEnabled = !self.isEnabled;
    }
    
    const filter = products => products;

    return { filter, toggle };
  });

export const ColorFilter = Filter
  .named('ColorFilter')
  .actions((self) => {
    const filter = (products) => {

      return products.filter(product => product.type === self.color);
    };

    const setColor = (color) => {
      self.color = color;
    };

    return { filter, setColor };
  });

  export const InStockFilter = Filter
  .named('InStockFilter')
  .actions((self) => {
    const filter = (products) => {
      console.log('in filter', products);
      return products.filter(product => product.inStock === self.inStock);
    };

    const setInStock = (inStock) => {
      console.log('click', inStock);
      self.isEnabled = true;
      self.inStock = inStock;
    };

    return { filter, setInStock };
  });

export default Filter;
