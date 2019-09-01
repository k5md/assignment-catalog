import _ from 'lodash';
import moment from 'moment';
import { FilterStore } from './FilterStore';

const filterDefaults = {
  type: 'Верхняя одежда',
  color: '#37be70',
  size: 'S',
  inStock: false,
  dateRange: [
    moment().subtract(1, 'months').format('YYYY-MM-DD'),
    moment().format('YYYY-MM-DD')
  ],
};

const products = [
  {
    "id": 1,
    "name":"Маленький Хлопковый Берет",
    "type":"Штанишки",
    "color":"#a0764b",
    "size": 'M',
    "inStock":false,
    "dateReceipt":"2018-12-25"
  },
  {
    "id": 2,
    "name":"Невероятный Пластиковый Стул",
    "type":"Белье",
    "color":"#4c528a",
    "size": 'S',
    "inStock":true,
    "dateReceipt":"2018-09-14"
  },
];

describe('FilterModel', () => {
  const filters = {
    'inStock': { valuesToSet: products[1].inStock, expectedLength: 1 },
    'size': { valuesToSet: products[0].size, expectedLength: 1 },
    'type': { valuesToSet: products[1].type, expectedLength: 1 },
    'dateRange': { valuesToSet: [ '2018-09-13', '2018-12-26' ], expectedLength: 2 },
  };
  
  Object.keys(filters).forEach((filterName) => {
    const filterStore = FilterStore.create();

    const { valuesToSet, expectedLength } = filters[filterName];
    test(`${filterName} has get method that return correct default values`, () => {     
      expect(filterStore[filterName]).toEqual(filterDefaults[filterName])
    });

    test(`${filterName} has set method to set property`, () => {
      // filterName => setFilterName
      const action = `set${_.upperFirst(filterName)}`;
      filterStore[action](valuesToSet)
      expect(filterStore[filterName]).toEqual(valuesToSet)
    });

    test(`${filterName} filters array on related property`, () => {
       // filterName => setFilterNameEnabled
      const toggle = `set${_.upperFirst(filterName)}Enabled`;
      filterStore[toggle]();
      const filtered = filterStore.filters(products);
      expect(filtered.length).toEqual(expectedLength);
    });
  });
});
