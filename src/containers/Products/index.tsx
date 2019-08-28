import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { STORE_PRODUCTS } from '../../constants';
import { ProductTable } from '../../components/ProductTable';

const ProductsContainer = ({
  [STORE_PRODUCTS]: { products }
}) => (<ProductTable products={products} />)

export const Products = inject(STORE_PRODUCTS)(observer(ProductsContainer));
