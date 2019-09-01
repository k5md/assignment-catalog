import { types, Instance } from 'mobx-state-tree';
import moment from 'moment';

export type Filter = Instance<typeof Filter>;
export type TypeFilter = Instance<typeof TypeFilter>;
export type SizeFilter = Instance<typeof SizeFilter>;
export type StockFilter = Instance<typeof StockFilter>;
export type DateRangeFilter = Instance<typeof DateRangeFilter>;

export const Filter = types
  .model({
    enabled: false,
    value: types.undefined,
  })
  .actions((self) => ({
    toggle: () => self.enabled = !self.enabled,
    setValue: (newValue) => { self.value = newValue; },
  }));

export const TypeFilter = types.compose('TypeFilter', Filter, types
  .model({
    value: 'Верхняя одежда',
    type: 'type',
  })
  .views((self) => ({
    filter: product => product.type === self.value,
  }))
);

export const SizeFilter = types.compose('SizeFilter', Filter, types
  .model({
    value: 'S',
    type: 'size',
  })
  .views((self) => ({
    filter: product => product.size === self.value,
  }))
);

export const StockFilter = types.compose('StockFilter', Filter, types
  .model({
    value: false,
    type: 'stock',
  })
  .views((self) => ({
    filter: product => product.inStock === self.value,
  }))
);

export const DateRangeFilter = types.compose('DateRangeFilter', Filter, types
  .model({
    value: types.optional(
      types.array(types.string),
      [moment().subtract(1, 'months').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
    ),
    type: 'dateRange',
  })
  .views((self) => ({
    filter: (product) => {
      const [ start, end ] = self.value;
      const afterStart = moment(product.dateReceipt).diff(moment(start)) >= 0;
      const beforeEnd = moment(end).diff(moment(product.dateReceipt)) >= 0;
      return  afterStart && beforeEnd;
    },
  }))
);
