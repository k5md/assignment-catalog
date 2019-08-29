import React from 'react';
import { Table, CellRendererProps } from '../../components/Table';
import { storeContext } from '../../stores/createStore';
import { useStoreData } from '../../utils/hooks';
import { IProduct } from '../../stores/Product';

const headers = ['id', 'name', 'type', 'color', 'size', 'inStock', 'dateReceipt'];

const cellRenderer: React.FC<CellRendererProps> = ({
  cellData,
  dataKey,
}) => (
  <div style={{backgroundColor: dataKey === 'color' ? cellData : 'unset'}}>
    {cellData.toString()}
  </div>
);

export const ProductsContainer = () => {
  const products: Array<IProduct> = useStoreData(
    storeContext, store => store, store => store.products
  );

  return (<Table items={products} headers={headers} cellRenderer={cellRenderer}/>);
}
