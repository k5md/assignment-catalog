import * as React from 'react';
import styles from './styles.css';
import { observer, inject } from 'mobx-react';
import { STORE_PRODUCTS, FILTER_TYPE, PRODUCT_SIZES, PRODUCT_TYPES } from '../../constants';
import _ from 'lodash';
import { Color, Checkbox, DateRange, Select } from '../../components';
import { Input } from 'antd';

const { Group: InputGroup } = Input;

const filters = [
  { filterName: 'ColorFilter', Component: Color, title: 'Цвет' },
  { filterName: 'InStockFilter', Component: Checkbox, title: 'В наличии'},
  { filterName: 'SizeFilter', Component: Select, title: 'Размер', options: PRODUCT_SIZES },
  { filterName: 'TypeFilter', Component: Select, title: 'Тип', options: PRODUCT_TYPES },
  { filterName: 'InDateRangeFilter', Component: DateRange, title: 'Период' },
];

@inject(STORE_PRODUCTS)
@observer
export class Filters extends React.Component {
  render() {
    const renderables = filters.map(({ filterName, Component, options, title }) => {
      const { _filters } = this.props[STORE_PRODUCTS];
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
    });
    return (
      <InputGroup className={styles.container}>
        {renderables}
      </InputGroup>
    );
  }
}
