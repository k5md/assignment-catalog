import { types, Instance } from 'mobx-state-tree';
import { Filter, FilterTypes } from './Filter';

export type FilterStore = Instance<typeof FilterStore>;

export const FilterStore = types
	.model({
		_filters: types.array(FilterTypes),
	})
	.views((self) => ({
		get filters(): {[key: string]: Filter} {
			// _filters -> { [filterType]: filter, ... }
			return self._filters.reduce((acc, cur) => ({...acc, [cur.type]: cur}), {});
		},
	}))
	;