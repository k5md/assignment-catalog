import { types, Instance } from 'mobx-state-tree';
import { TypeFilter, ColorFilter, SizeFilter, InStockFilter } from '../models/FilterModel';
import { FilterTypes } from 'constants';

export type FilterStoreModel = Instance<typeof FilterStore>;

export const FilterStore = types
  .model('FilterStore', {
    filters: types.array(types.union(
      TypeFilter,
      ColorFilter,
      SizeFilter,
      InStockFilter
    )),
  })
  .actions((self) => {
    const toggle = (filterType) => {
      self.filters[filterType].toggle();
    };

    const setType = (type) => {
      self.filters[FilterTypes.TypeFilter].setType(type);
    };

    const setColor = (color) => {
      self.filters[FilterTypes.ColorFilter].setColor(color);
    };

    const setSize = (size) => {
      self.filters[FilterTypes.SizeFilter].setSize(size);
    };

    const setInStock = (inStock) => {
      self.filters[FilterTypes.InStockFilter].setInStock(inStock);
    };

    return { toggle, setType, setColor, setSize, setInStock };
  });

export default FilterStore;
