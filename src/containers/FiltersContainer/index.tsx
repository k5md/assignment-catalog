import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { storeContext } from '../../stores/createStore';
import { useStoreData } from '../../utils/hooks';
import { Filters as FiltersComponent } from '../../components/Filters';

export const FiltersContainer = () => {
  // WHYYYY
  // With useStoreData, when passed identity function, dataSelector is not observing props, it needs
  // to touch each reference.
  const {
    type, setType, typeEnabled, setTypeEnabled,
    size, setSize, sizeEnabled, setSizeEnabled,
    inStock, setInStock, inStockEnabled, setInStockEnabled,
    dateRange, setDateRange, dateRangeEnabled, setDateRangeEnabled,
  } = useStoreData(storeContext, store => store.filterStore, store => ({
    type: store.type, setType: store.setType, typeEnabled: store.typeEnabled, setTypeEnabled: store.setTypeEnabled,
    size: store.size, setSize: store.setSize, sizeEnabled: store.sizeEnabled, setSizeEnabled: store.setSizeEnabled,
    inStock: store.inStock, setInStock: store.setInStock, inStockEnabled: store.inStockEnabled, setInStockEnabled: store.setInStockEnabled,
    dateRange: store.dateRange, setDateRange: store.setDateRange, dateRangeEnabled: store.dateRangeEnabled, setDateRangeEnabled: store.setDateRangeEnabled,
  }));

  return (
    <FiltersComponent
      type={{
        value: type,
        onChange: value => setType(value),
        isEnabled: typeEnabled,
        toggle: () => setTypeEnabled(!typeEnabled),
        options: ['Белье', 'Штанишки', 'Верхняя одежда'],
      }}
      size={{
        value: size,
        onChange: value => setSize(value),
        isEnabled: sizeEnabled,
        toggle: () => setSizeEnabled(!sizeEnabled),
        options: ['S', 'M', 'L', 'XL'],
      }}
      inStock={{
        value: inStock,
        onChange: e => setInStock(e.target.checked),
        isEnabled: inStockEnabled,
        toggle: () => setInStockEnabled(!inStockEnabled),
      }}
      dateRange={{
        value: dateRange.map(d => moment(d)),
        onChange: (moments, formatted) => setDateRange(formatted),
        isEnabled: dateRangeEnabled,
        toggle: () => setDateRangeEnabled(!dateRangeEnabled),
      }}
    />
  );
};
