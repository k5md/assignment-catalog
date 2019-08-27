import * as React from 'react';
import { ProductItem } from '../ProductItem';
import { IProduct } from '../../models/ProductModel';
import * as style from './style.css';

export interface ProductItemProps {
  products: Array<IProduct>,
}
export interface ProductItemState {}

export class ProductItem extends React.Component<ProductItemProps, ProductItemState> {
  render() {
    const { product } = this.props;
    return (
      <React.Fragment>
        {products.map((product) => <ProductItem product={product} />)}
      </React.Fragment>
    );
  }
}
