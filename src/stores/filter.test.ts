import { TypeFilter, SizeFilter, StockFilter, DateRangeFilter } from './Filter';

describe('FilterModel', () => {
	const filters = [ TypeFilter, SizeFilter, StockFilter, DateRangeFilter ];
	filters.forEach((model) => {
		const filter = model.create();
	
		test(`${model.name} has get method that returns default value`, () => {     
			expect(filter).toHaveProperty('value');
		});
	});
});



