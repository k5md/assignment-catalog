import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { STORE_PRODUCTS } from '../../constants';
import { ProductStoreModel } from '../../stores/ProductStore';
import { ProductTable } from '../../components/ProductTable';

@inject(STORE_PRODUCTS)
@observer
export class Products extends React.Component<{productStore: ProductStoreModel}> {
  render() {
    const { products } = this.props[STORE_PRODUCTS];
    return (
      <ProductTable products={products} />
    );
  }
}