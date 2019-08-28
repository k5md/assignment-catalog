import * as React from 'react';
import { Column, Table, AutoSizer } from 'react-virtualized';
import _ from 'lodash';
import { IProduct } from '../../models/ProductModel';

export interface ProductTableProps {
  products: Array<IProduct>,
}

const headers = ['id', 'name', 'type', 'color', 'size', 'inStock', 'dateReceipt'];

const cellRenderer = ({
  cellData,
  dataKey,
}) => (
  <div style={{backgroundColor: dataKey === 'color' ? cellData : 'unset'}}>
    {cellData.toString()}
  </div>
);

export const ProductTable = ({ products }: ProductTableProps) => (
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
            cellRenderer={cellRenderer}
          />
        ))}
      </Table>
    )}
  </AutoSizer>
);
