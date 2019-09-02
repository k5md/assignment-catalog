import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { storeContext } from '../../stores/createStore';
import { useFilters } from '../../utils/hooks';
import { Filters as FiltersComponent } from '../../components/Filters';

export const FiltersContainer = () => {
	const filters = useFilters(storeContext);

	return useObserver(() => (
		<FiltersComponent {...filters}	/>
	));
};
