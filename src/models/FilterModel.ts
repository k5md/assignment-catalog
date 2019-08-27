import { types } from 'mobx-state-tree';

export const Filter = types
  .model({
    isEnabled: false,
    //type: null,
    color: '#ffffff',
    //size: null,
    inStock: false,
  })
  .actions((self) => {
    const toggle = () => {
      self.isEnabled = !self.isEnabled;
    }
    
    const filter = products => products;

    return { filter, toggle };
  });

export const TypeFilter = Filter
  .named('TypeFilter')
  .actions((self) => {
    const filter = (products) => {
      return products.filter(product => product.type === self.type);
    };

    const setType = (type) => {
      self.type = type;
    };

    return { filter, setType };
  });

export const ColorFilter = Filter
  .named('ColorFilter')
  .actions((self) => {
    const filter = (products) => {
      return products.filter(product => product.color === self.color);
    };

    const setColor = (color) => {
      self.color = color;
    };

    return { filter, setColor };
  });

export const SizeFilter = Filter
  .named('SizeFilter')
  .actions((self) => {
    const filter = (products) => {
      return products.filter(product => product.size === self.size);
    };

    const setSize = (size) => {
      self.size = size;
    };

    return { filter, setSize };
  });

export const InStockFilter = Filter
  .named('InStockFilter')
  .actions((self) => {
    const filter = (products) => {
      return products.filter(product => product.inStock);
    };

    return { filter };
  });

export default Filter;
