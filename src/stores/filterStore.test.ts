import _ from 'lodash';
import { FilterStore } from './FilterStore';
import { StockFilter } from './Filter';

describe('filterStoreModel', () => {
	const _filters = [ StockFilter.create() ];
	const store = FilterStore.create({
		_filters,
	});
	it('creates model', () => {
		expect(store).toBeTruthy();
	})
	
	it('returns a map with filterType keys', () => {
		expect(store.filters).toHaveProperty('stock');
	});
});
