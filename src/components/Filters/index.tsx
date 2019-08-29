import * as React from 'react';
import { Input } from 'antd';
import { Checkbox, DateRange, Select } from '../';
import styles from './styles.css';

const { Group: InputGroup } = Input;

export const Filters = ({
  type,
  inStock,
  size,
  dateRange,
}) => (
  <InputGroup className={styles.container}>
    <Select
      title="Тип"
      value={type.value}
      onChange={type.onChange}
      isEnabled={type.isEnabled}
      toggle={type.toggle}
      options={type.options}
    />
    <Checkbox
      title="В наличии"
      value={inStock.value}
      onChange={inStock.onChange}
      isEnabled={inStock.isEnabled}
      toggle={inStock.toggle}
    />
    <Select
      title="Размер"
      value={size.value}
      onChange={size.onChange}
      isEnabled={size.isEnabled}
      toggle={size.toggle}
      options={size.options}
    />
    <DateRange
      title="Период"
      value={dateRange.value}
      onChange={dateRange.onChange}
      isEnabled={dateRange.isEnabled}
      toggle={dateRange.toggle}
    />
  </InputGroup>
);
