import React from 'react';
import { useObserver } from 'mobx-react-lite';

// https://blog.mselee.com/posts/2019/06/08/using-mobx-with-react-hooks-typescript/
export const useStoreData = <Selection, ContextData, Store>(
	context: React.Context<ContextData>,
	storeSelector: (contextData: ContextData) => Store,
	dataSelector: (store: Store) => Selection) => {
	const value = React.useContext(context);
	if (!value) {
		throw new Error();
	}
	const store = storeSelector(value);
	return useObserver(() => {
		return dataSelector(store);
	});
};

export const useFilters = (context) => useStoreData(
	context,
	store => store.filterStore,
	filterStore => filterStore.filters,
);
