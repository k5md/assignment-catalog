import { mount } from 'enzyme';
import React from "react";
import { Products } from "./"

const headers = ['id', 'name', 'type', 'color', 'size', 'inStock', 'dateReceipt'];

const products = [
	{
		"id":1,
		"name":"Маленький Хлопковый Берет",
		"type":"Белье",
		"color":"#a0764b",
		"size":"M",
		"inStock":false,
		"dateReceipt":"2018-12-25"
	},
	{
		"id":2,
		"name":"Невероятный Пластиковый Стул",
		"type":"Штанишки",
		"color":"#4c528a",
		"size":"S",
		"inStock":true,
		"dateReceipt":"2018-09-14"
	},
	{
		"id":3,
		"name":"Стул",
		"type":"Штанишки",
		"color":"#4c528a",
		"size":"L",
		"inStock":false,
		"dateReceipt":"2018-09-15"
	},
];

describe("Products", () => {
	it("renders products with headers", () => {
		const wrapper = mount(<Products items={products} />);
		
		expect(wrapper.text()).toEqual(headers.join(''));
	});
});
