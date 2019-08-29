import React from 'react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';
import moment from 'moment';

import { Filters as FiltersComponent } from '../../components/Filters';

export const Filters = ({
  store: { filterStore }
}) => {
  const  {
    type, setType, typeEnabled, setTypeEnabled,
    size, setSize, sizeEnabled, setSizeEnabled,
    inStock, setInStock, inStockEnabled, setInStockEnabled,
    dateRange, setDateRange, dateRangeEnabled, setDateRangeEnabled,
  } = filterStore;

  return (
    <FiltersComponent
      type={{
        value: type,
        onChange: (value) => setType(value),
        isEnabled: typeEnabled,
        toggle: () => setTypeEnabled(!typeEnabled),
        options: ['Белье', 'Штанишки', 'Верхняя одежда'],
      }}
      size={{
        value: size,
        onChange: (value) => setSize(value),
        isEnabled: sizeEnabled,
        toggle: () => setSizeEnabled(!sizeEnabled),
        options: ['S', 'M', 'L', 'XL'],
      }}
      inStock={{
        value: inStock,
        onChange: (e) => setInStock(e.target.checked),
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
}

export const FiltersContainer = inject('store')(observer(Filters));
