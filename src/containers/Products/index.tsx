import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { STORE_PRODUCTS } from '../../constants';
import { ProductStoreModel } from '../../stores/ProductStore';
import { ProductList } from '../../components/ProductList';

@inject(STORE_PRODUCTS)
@observer
export class Products extends React.Component<{productStore: ProductStoreModel}> {
  render() {
    const { products, length } = this.props[STORE_PRODUCTS];
    console.log(length);
    return (
      <React.Fragment>
        <div>Products</div>
        <ProductList products={products} />
      </React.Fragment>
    );
  }
}