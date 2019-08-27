export enum ProductsFilter {
  TYPE,
  COLOR,
  SIZE,
  INSTOCK,
  DATE,
}

export type ProductsFilterType = 'TYPE' | 'COLOR' | 'SIZE' | 'INSTOCK' | 'DATE';

export const PRODUCTS_FILTER_TYPES = [
  ProductsFilter.TYPE,
  ProductsFilter.COLOR,
  ProductsFilter.SIZE,
  ProductsFilter.INSTOCK,
  ProductsFilter.DATE,
];

export enum ProductsType {
  'Верхняя одежда',
  'Бельё',
  'Штанишки',
}

export const PRODUCTS_TYPE_TYPES = [
  ProductsType['Верхняя одежда'],
  ProductsType['Бельё'],
  ProductsType['Штанишки'],
];

export enum ProductsSize {
  S, 
  M,
  L,
  XL,
}

export const PRODUCTS_SIZE_TYPES = [
  ProductsSize.S, 
  ProductsSize.M,
  ProductsSize.L,
  ProductsSize.XL,
];
