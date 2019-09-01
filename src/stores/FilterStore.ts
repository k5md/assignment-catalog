import { types, Instance } from 'mobx-state-tree';
import { DateRangeFilter, TypeFilter, SizeFilter, StockFilter } from './Filter';

export type FilterStore = Instance<typeof FilterStore>;

const anyFilter = types.union(
	{ dispatcher: (snapshot) => {
		switch (snapshot.type) {
			case 'type': return TypeFilter;
			case 'size': return SizeFilter;
			case 'stock': return StockFilter;
			case 'dateRange': return DateRangeFilter;
			default: throw new Error();
		}
	}},
	TypeFilter, SizeFilter, StockFilter, DateRangeFilter,
);

export const FilterStore = types
	.model({
		_filters: types.array(anyFilter),
	})
	.views((self) => ({
		get filters() {
			// _filters -> { [filterType]: filter, ... }
			return self._filters.reduce((acc, cur) => ({...acc, [cur.type]: cur}), {});
		},
	}))
	;