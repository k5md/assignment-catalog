import { mount } from 'enzyme';
import React from "react";
import { Filters } from '../Filters';
import { Checkbox, Select, DateRange } from '../../components';

const commonProps = {
	enabled: false,
	toggle: () => ({}),
	setValue: () => ({}),
};

const filterProps = {
	type: {
		...commonProps,
		value: 'Белье',
		options: ['Белье', 'Штанишки', 'Верхняя одежда'],
	},
	size: {
		...commonProps,
		value: 'S',
		options: ['S', 'M', 'L', 'XL'],
	},
	stock: {
		...commonProps,
		value: false,
	},
	dateRange: {
		...commonProps,
		value: [],
	},
};

describe("Filters", () => {
	it("renders filters", () => {
		const wrapper = mount(<Filters {...filterProps}/>);

		expect(wrapper.find(Checkbox)).toHaveLength(1);
		expect(wrapper.find(Select)).toHaveLength(2);
		expect(wrapper.find(DateRange)).toHaveLength(1);
	});
});
