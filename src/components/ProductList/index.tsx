import * as React from 'react';
import { Column, Table, AutoSizer } from 'react-virtualized';
// import { ProductItem } from '../ProductItem';
import { IProduct } from '../../models/ProductModel';

import _ from 'lodash';

export interface ProductListProps {
  products: Array<IProduct>,
}
export interface ProductListState {}

const headers = ['id', 'name', 'color', 'inStock', 'dateReceipt'];

export class ProductList extends React.Component<ProductListProps, ProductListState> {
  render() {
    // const { products } = this.props;
    const { products } = this.props;

    return (
      <AutoSizer>
      {({width, height}) => (
        <Table
          width={width}
          height={height}
          headerHeight={30}
          rowHeight={40}
          rowCount={products.length}
          rowGetter={({ index }) => products[index]}
        >
          {headers.map(header => (
            <Column
              key={_.uniqueId()}
              label={header}
              dataKey={header}
              width={width}
              cellDataGetter={({ rowData }) => rowData[header]}
            />
          ))}
        </Table>
      )}
      </AutoSizer>
    );
  }
}
