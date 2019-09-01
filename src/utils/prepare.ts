const _ = require('lodash');
const faker = require('faker/locale/ru');
const fs = require('fs');
const moment = require('moment');

const getRandomColor = (): string => {
	const rgb = Array(3).fill(null).map(() => {
		const component = _.random(0, 255).toString(16);
		const padded = _.pad(component, 2, '0');
		return padded;
	});
	const hexString = `#${rgb.join('')}`;
	return hexString;
};

const datasetSize = 1000;
const productTypes = ['Верхняя одежда', 'Белье', 'Штанишки'];
const productSizes = ['S', 'M', 'L', 'XL'];

class Product {
	id: number =  _.uniqueId();
	name: string = faker.commerce.productName();
	type: 'Верхняя одежда' | 'Белье' | 'Штанишки' = faker.random.arrayElement(productTypes);
	color: string = getRandomColor();
	size: 'S' | 'M' | 'L' | 'XL' = faker.random.arrayElement(productSizes);
	inStock: boolean = faker.random.boolean();
	dateReceipt: string = moment(new Date(faker.date.past())).format('YYYY-MM-DD');
}

console.log('Generating dataset...');
const dataset = Array.from(Array(datasetSize).keys()).map(() => new Product());

console.log('Done! Saving...');
const json = JSON.stringify(dataset);
fs.writeFileSync('products.json', json, 'utf8');

console.log('Saved!')
