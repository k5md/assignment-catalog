import { mount } from 'enzyme';
import React from "react";
import { FILTER_TYPES, STORE_PRODUCTS } from '../../constants';
import { FiltersContainer } from '../Filters';
import { Checkbox, Color, Select, DateRange } from '../../components';

const commonProps = {
  isEnabled: false,
  toggle: () => ({}),
  setFilterValue: () => ({}),
};

const filterProps = {
  ColorFilter: { ...commonProps, filterValue: '#ffffff', title: 'Цвет' },
  InStockFilter: { ...commonProps, filterValue: true, title: 'В наличии' },
  SizeFilter: { ...commonProps, filterValue: 'M',  title: 'Размер' },
  TypeFilter: { ...commonProps, filterValue: 'Белье', title: 'Тип' },
  InDateRangeFilter: { ...commonProps, filterValue: ['2010-10-10', '2010-10-11'], title: 'Период' },
};

// Mimic ordering of filter types in filtertypes to get an array with same order
const filters = FILTER_TYPES.map(filter => filterProps[filter.name]);

describe("Filters", () => {
  it("renders filters", () => {
    const props = {
      [STORE_PRODUCTS]: { _filters: filters }
    };

    const wrapper = mount(<FiltersContainer {...props}/>);

    expect(wrapper.find(Checkbox)).toHaveLength(1);
    expect(wrapper.find(Select)).toHaveLength(2);
    expect(wrapper.find(Color)).toHaveLength(1);
    expect(wrapper.find(DateRange)).toHaveLength(1);
  });
});
