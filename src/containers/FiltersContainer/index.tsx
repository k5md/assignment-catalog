import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { useObservable, useObserver } from 'mobx-react-lite';
import { storeContext } from '../../stores/createStore';
import { useStoreData, useFilters } from '../../utils/hooks';
import { Filters as FiltersComponent } from '../../components/Filters';


export const FiltersContainer = () => {
	const { type, size, stock, dateRange } = useFilters(storeContext);

	return useObserver(() => (
		<FiltersComponent
			type={{
				value: type.value,
				onChange: value => type.setValue(value),
				isEnabled: type.enabled,
				toggle: type.toggle,
				options: ['Белье', 'Штанишки', 'Верхняя одежда'],
			}}
			size={{
				value: size.value,
				onChange: value => size.setValue(value),
				isEnabled: size.enabled,
				toggle: size.toggle,
				options: ['S', 'M', 'L', 'XL'],
			}}
			inStock={{
				value: stock.value,
				onChange: ({ target: { checked } }) => stock.setValue(checked),
				isEnabled: stock.enabled,
				toggle: stock.toggle,
			}}
			dateRange={{
				value: dateRange.value.map(d => moment(d)),
				onChange: (moments, formatted) => dateRange.setValue(formatted),
				isEnabled: dateRange.enabled,
				toggle: dateRange.toggle,
			}}
		/>
	));
};
