import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { storeContext } from '../../stores/createStore';
import { useStoreData } from '../../utils/hooks';
import { Filters as FiltersComponent } from '../../components/Filters';

export const FiltersContainer = () => {
  const {
    type, typeEnabled,
    size, sizeEnabled,
    inStock, inStockEnabled,
    dateRange, dateRangeEnabled,
  } = useStoreData(storeContext, store => store.filterStore, filterStore => filterStore.filterProps);

  const {
    setType, setTypeEnabled,
    setSize, setSizeEnabled,
    setInStock, setInStockEnabled,
    setDateRange, setDateRangeEnabled,
  } = useStoreData(storeContext, store => store.filterStore, filterStore => filterStore);

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
