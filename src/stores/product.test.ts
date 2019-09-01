import _ from 'lodash';
import { Product } from './Product';

describe('ProductModel', () => {
	it('returns own properties when getProduct is called', () => {
		const initialState = {
			id: 0,
			type: 'Верхняя одежда',
			name: 'nice mustbuy item',
			size: 'L',
			color: '#ffffff',
			inStock: true,
			dateReceipt: '10-10-2010',
		};

		const product = Product.create(initialState);

		const props = product.getProduct();
		expect(props).toEqual(initialState);
	})
});

