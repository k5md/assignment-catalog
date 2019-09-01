import React from 'react';
import { storeContext } from '../../stores/createStore';
import { useStoreData } from '../../utils/hooks';
import { Product } from '../../stores/Product';
import { Products } from '../../components';

export const ProductsContainer = () => {
	const products: Array<Product> = useStoreData(
		storeContext, store => store, store => store.products
	);

	return (<Products items={products} />);
};
