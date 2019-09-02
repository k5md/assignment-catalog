import React from 'react';
import { storeContext } from '../../stores/createStore';
import { useFilters } from '../../utils/hooks';
import { Filters } from '../../components/Filters';

export const FiltersContainer = () => {
	const filters = useFilters(storeContext);

	return (
		<Filters {...filters}	/>
	);
};
