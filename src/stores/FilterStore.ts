import { types, Instance } from 'mobx-state-tree';
import moment from 'moment';

export interface IFilterStore {
  type: string,
  size: string,
  inStock: boolean,
  dateRange: Array<string>,

  setSize: Function,
  setType: Function,
  setInStock: Function,
  setDateRange: Function,

  typeEnabled: boolean,
  sizeEnabled: boolean,
  inStockEnabled: boolean,
  dateRangeEnabled: boolean,

  setTypeEnabled: Function,
  setSizeEnabled: Function,
  setInStockEnabled: Function,
  setDateRangeEnabled: Function,
}

export type FilterStoreModel = Instance<typeof FilterStore>;

export const FilterStore = types
  .model({
    type: 'Верхняя одежда',
    size: 'S',
    inStock: false,
    dateRange: types.optional(
      types.array(types.string),
      [moment().subtract(1, 'months').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
    ),

    typeEnabled: false,
    sizeEnabled: false,
    inStockEnabled: false,
    dateRangeEnabled: false,
  })
  .views((self) => ({
    get filters() {
      return (products) => {
        // O(4N)!!!
        let filtered = products;
        if (self.typeEnabled) {
          filtered = filtered.filter(product => product.type === self.type);
        }
        if (self.sizeEnabled) {
          filtered = filtered.filter(product => product.size === self.size);
        }
        if (self.inStockEnabled) {
          filtered = filtered.filter(product => product.inStock === self.inStock);
        }
        if (self.dateRangeEnabled) {
          const [ start, end ] = self.dateRange;
          filtered = filtered.filter((product) => {
            const afterStart = moment(product.dateReceipt).diff(moment(start)) >= 0;
            const beforeEnd = moment(end).diff(moment(product.dateReceipt)) >= 0;
            return  afterStart && beforeEnd;
          })
        }
        return filtered;
      };
    },
  }))
  .actions((self) => {
    const setTypeEnabled = (value): void => self.typeEnabled = value;
    const setSizeEnabled = (value): void => self.sizeEnabled = value;
    const setInStockEnabled = (value): void => self.inStockEnabled = value;
    const setDateRangeEnabled = (value): void => self.dateRangeEnabled = value;

    const setSize = (value): void => self.size = value;
    const setType = (value): void => self.type = value;
    const setInStock = (value): void => self.inStock = value;
    const setDateRange = (value): void => self.dateRange = value;

    return {
      setTypeEnabled,
      setSizeEnabled,
      setInStockEnabled,
      setDateRangeEnabled,
      setSize,
      setType,
      setInStock,
      setDateRange,
    };
  });
