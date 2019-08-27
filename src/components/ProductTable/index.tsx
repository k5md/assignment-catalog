import * as React from 'react';
import { Column, Table, AutoSizer } from 'react-virtualized';
// import { ProductItem } from '../ProductItem';
import { IProduct } from '../../models/ProductModel';

import _ from 'lodash';

export interface ProductTableProps {
  products: Array<IProduct>,
}
export interface ProductTableState {}

const headers = ['id', 'name', 'type', 'color', 'size', 'inStock', 'dateReceipt'];

export class ProductTable extends React.Component<ProductTableProps, ProductTableState> {
  cellRenderer({
    cellData,
    dataKey,
  }) {
    return <div style={{backgroundColor:  dataKey === 'color' ? cellData : 'unset'}}>
    {cellData.toString()}</div>
  }
  render() {
    const { products } = this.props;
    return (
      <AutoSizer>
      {({width, height}) => (
        <Table
          width={width}
          height={height}
          headerHeight={36}
          rowHeight={36}
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
              cellRenderer={this.cellRenderer}
            />
          ))}
        </Table>
      )}
      </AutoSizer>
    );
  }
}
