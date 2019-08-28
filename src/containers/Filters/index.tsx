import * as React from 'react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';
import { Input } from 'antd';
import { STORE_PRODUCTS, FILTER_TYPE, PRODUCT_SIZES, PRODUCT_TYPES } from '../../constants';
import { Color, Checkbox, DateRange, Select } from '../../components';
import styles from './styles.css';

const { Group: InputGroup } = Input;

const filters = [
  { filterName: 'ColorFilter', Component: Color, title: 'Цвет' },
  { filterName: 'InStockFilter', Component: Checkbox, title: 'В наличии'},
  { filterName: 'SizeFilter', Component: Select, title: 'Размер', options: PRODUCT_SIZES },
  { filterName: 'TypeFilter', Component: Select, title: 'Тип', options: PRODUCT_TYPES },
  { filterName: 'InDateRangeFilter', Component: DateRange, title: 'Период' },
];

const FiltersContainer = ({
  [STORE_PRODUCTS]: { _filters }
}) => (
  <InputGroup className={styles.container}>
    {filters.map(({ filterName, Component, options, title }) => {
      const filterIndex = FILTER_TYPE[filterName];
      const filter = _filters[filterIndex];
      return (
        <Component
          key={_.uniqueId()}
          value={filter.filterValue}
          onChange={filter.setFilterValue}
          isEnabled={filter.isEnabled}
          toggle={filter.toggle}
          options={options}
          title={title}
        />
      );
    })}
  </InputGroup>
);

export const Filters = inject(STORE_PRODUCTS)(observer(FiltersContainer));
