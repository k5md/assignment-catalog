import { types, Instance } from 'mobx-state-tree';

import { Product } from './Product';
import { ProductStore } from './ProductStore';
import { FilterStore } from './FilterStore';

export type RootStore = Instance<typeof RootStore>;

export const RootStore = types
	.model('RootStore', {
		productStore: ProductStore,
		filterStore: FilterStore,
	})
	.views((self) => ({
		get products(): Array<Product> {
			const p = self.productStore.products;
			const f = self.filterStore._filters.filter(filter => filter.enabled);

			return p.filter(product => f.every(filter => filter.filter(product)));
		},
	}));

export default RootStore;
