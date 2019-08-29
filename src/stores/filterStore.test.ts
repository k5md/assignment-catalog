import _ from 'lodash';
import moment from 'moment';
import { Filter } from './FilterModel';
import { IProduct } from './ProductModel';
import { FILTER_TYPES, FILTER_TYPE } from '../constants';

const filterDefaults = {
  isEnabled: false,
  type: 'Верхняя одежда',
  color: '#37be70',
  size: 'S',
  inStock: false,
  dateRange: [
    moment().subtract(1, 'months').format('YYYY-MM-DD'),
    moment().format('YYYY-MM-DD')
  ],
};

describe('FilterModel', () => {
  it('creates a filter with default values', () => {
    const initialState = {
      type: filterDefaults.type,
      size: filterDefaults.size,
    };

    const filter = Filter.create(initialState);
    expect(filter).toHaveProperty('isEnabled', false);
  })
  it('changes isEnabled property on toggle', () => {
    const initialState = {
      type: filterDefaults.type,
      size: filterDefaults.size,
    };

    const filter = Filter.create(initialState);
    expect(filter).toHaveProperty('isEnabled', filterDefaults.isEnabled);
    filter.toggle();
    expect(filter).toHaveProperty('isEnabled', !filterDefaults.isEnabled);
  })
});

describe('Derived filter model', () => {
  const initialState = {
    type: filterDefaults.type,
    size: filterDefaults.size,
  };

  const products: Array<IProduct> = [
    {
      "id":1,
      "name":"Маленький Хлопковый Берет",
      "type":"Штанишки",
      "color":"#a0764b",
      "size": 'M' as 'M',
      "inStock":false,
      "dateReceipt":"2018-12-25"
    },
    {
      "id":2,
      "name":"Невероятный Пластиковый Стул",
      "type":"Белье",
      "color":"#4c528a",
      "size": 'S' as 'S',
      "inStock":true,
      "dateReceipt":"2018-09-14"
    },
  ];
  
  const expected = {
    'ColorFilter': { valuesToSet: [ products[0].color ], resultsLength: 1 },
    'InStockFilter': { valuesToSet: [ products[1].inStock ], resultsLength: 1 },
    'SizeFilter': { valuesToSet: [ products[0].size ], resultsLength: 1 },
    'TypeFilter': { valuesToSet: [ products[1].type ], resultsLength: 1 },
    'InDateRangeFilter': { valuesToSet: [ '2018-09-13', '2018-12-26' ], resultsLength: 2 },
  };

  const filters = [
    { filterName: 'ColorFilter', property: 'color', valuesToSet: ['#fffff0'] },
    { filterName: 'InStockFilter', property: 'inStock', valuesToSet: [false] },
    { filterName: 'SizeFilter', property: 'size', valuesToSet: ['M'] },
    { filterName: 'TypeFilter', property: 'type', valuesToSet: ['Белье'] },
    { filterName: 'InDateRangeFilter', property: 'dateRange', valuesToSet: ['2010-10-10', '2010-10-11'] },
  ];

  filters.forEach(({ filterName, property, valuesToSet }) => {
    test(`${filterName} returns related property when filterValue is requested`, () => {
      const filter = FILTER_TYPES[FILTER_TYPE[filterName]].create(initialState);
      expect(filter.filterValue).toEqual(filterDefaults[property])
    });

    test(`${filterName} sets related property when filterValue is requested`, () => {
      const filter = FILTER_TYPES[FILTER_TYPE[filterName]].create(initialState);
      // @ts-ignore
      filter.setFilterValue(...valuesToSet);

      const newFilterValue = filter.filterValue;
      if (Array.isArray(newFilterValue)) {
        expect(newFilterValue).toEqual(valuesToSet)
      } else {
        expect([ newFilterValue ]).toEqual(valuesToSet);
      }
    });

    test(`${filterName} filters array on related property`, () => {
      const filter = FILTER_TYPES[FILTER_TYPE[filterName]].create(initialState);
      const { valuesToSet, resultsLength } = expected[filterName];
      // @ts-ignore
      filter.setFilterValue(...valuesToSet);
      const filtered = filter.filter(products);
      expect(filtered.length).toEqual(resultsLength);
    })
  });
});
