import { types, Instance, cast } from 'mobx-state-tree';
import moment from 'moment';
import { IProduct } from './ProductModel';
import {
  PRODUCT_TYPE_LITERAL,
  PRODUCT_SIZE_LITERAL,
} from '../constants';

export interface IFilter {
  isEnabled: boolean,
  type: PRODUCT_TYPE_LITERAL,
  color: string,
  size: PRODUCT_SIZE_LITERAL,
  inStock: boolean,
  dateRange: Array<string>,
  filter: Function,
  toggle: Function,
  setFilterValue: Function,
}

export type FilterModel = Instance<typeof Filter>;

export const Filter = types
  .model({
    isEnabled: false,
    type: 'Верхняя одежда',
    color: '#37be70',
    size: 'S',
    inStock: false,
    dateRange: types.optional(
      types.array(types.string),
      [moment().subtract(1, 'months').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
    ),
  })
  .views((self) => ({
    get filterValue(): void {
      return null;
    },
  }))
  .actions((self) => {
    const toggle = (): void => {
      self.isEnabled = !self.isEnabled;
    }
    
    const filter = (products: Array<IProduct>): Array<IProduct> => products;
    const setFilterValue = (): object => ({});

    return { filter, toggle, setFilterValue };
  });

export const TypeFilter = Filter
  .named('TypeFilter')
  .views((self) => ({
    get filterValue() {
      return self.type;
    },
  }))
  .actions((self) => {
    const filter = (products: Array<IProduct>): Array<IProduct> => {
      return products.filter(product => product.type === self.type);
    };

    const setFilterValue = (type: PRODUCT_TYPE_LITERAL): void => {
      self.type = type;
      self.toggle();
      self.toggle();
    };

    return { filter, setFilterValue };
  });

export const ColorFilter = Filter
  .named('ColorFilter')
  .views((self) => ({
    get filterValue(): string {
      return self.color;
    },
  }))
  .actions((self) => {
    const filter = (products: Array<IProduct>): Array<IProduct> => {
      return products.filter(product => product.color === self.color);
    };

    const setFilterValue = (color: string): void => {
      self.color = color;
      self.toggle();
      self.toggle();
    };

    return { filter, setFilterValue };
  });

export const SizeFilter = Filter
  .named('SizeFilter')
  .views((self) => ({
    get filterValue() {
      return self.size;
    },
  }))
  .actions((self) => {
    const filter = (products: Array<IProduct>): Array<IProduct> => {
      return products.filter(product => product.size === self.size);
    };

    const setFilterValue = (size: PRODUCT_SIZE_LITERAL): void => {
      self.size = size;
      self.toggle();
      self.toggle();
    };

    return { filter, setFilterValue };
  });

export const InStockFilter = Filter
  .named('InStockFilter')
  .views((self) => ({
    get filterValue(): boolean {
      return self.inStock;
    },
  }))
  .actions((self) => {
    const filter = (products: Array<IProduct>): Array<IProduct> => {
      return products.filter(product => product.inStock === self.inStock);
    };

    const setFilterValue = (inStock: boolean) => {
      self.inStock = inStock;
      self.toggle();
      self.toggle();
    }

    return { filter, setFilterValue};
  });

export const InDateRangeFilter = Filter
  .named('InDateRangeFilter')
  .views((self) => ({
    get filterValue(): Array<string> {
      return self.dateRange;
    },
  }))
  .actions((self) => {
    const filter = (products: Array<IProduct>): Array<IProduct> => {
      return products.filter(product => {
        const [ start, end ] = self.dateRange;
        const afterStart = moment(product.dateReceipt).diff(moment(start)) >= 0;
        const beforeEnd = moment(end).diff(moment(product.dateReceipt)) >= 0;
        return  afterStart && beforeEnd;
      });
    };

    const setFilterValue = (start: string, end: string): void => {
      self.dateRange = cast([ start, end ]);
      self.toggle();
      self.toggle();
    };

    return { filter, setFilterValue };
  });

export default Filter;
