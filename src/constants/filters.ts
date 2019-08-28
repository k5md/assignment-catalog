import {
  IFilter,
  ColorFilter,
  InStockFilter,
  TypeFilter,
  SizeFilter,
  InDateRangeFilter
} from '../models/FilterModel';

export const FILTER_TYPES = [
  ColorFilter,
  InStockFilter,
  TypeFilter,
  SizeFilter,
  InDateRangeFilter,
];

export enum FILTER_TYPE {
  ColorFilter,
  InStockFilter,
  TypeFilter,
  SizeFilter,
  InDateRangeFilter,
}
export type FILTER_TYPE_LITERAL = IFilter;
