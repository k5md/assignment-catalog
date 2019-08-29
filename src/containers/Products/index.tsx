import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { ProductTable } from '../../components/ProductTable';

export const ProductsContainer = ({
  store: { products }
}) => (<ProductTable products={products} />)

export const Products = inject('store')(observer(ProductsContainer));
