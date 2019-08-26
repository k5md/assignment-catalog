const _ = require('lodash');
const faker = require('faker/locale/ru');
const fs = require('fs');
const { format } = require('date-fns');

// https://www.reddit.com/r/typescript/comments/amh8cu/dynamically_build_typescript_string_literal_type/eflx6at/
function asLiterals<T extends string>(arr: T[]): T[] { return arr; }

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
const productTypesAmount = 100; 

const productTypes = Array
  .from(Array(productTypesAmount).keys())
  .map(() => faker.commerce.product());
const productSizes = ['S', 'M', 'L', 'XL'];
const productTypesLiterals = asLiterals(productTypes)
const productSizesLiterals = asLiterals(productSizes);

interface IProduct {
  id: number,
  name: string,
  type: typeof productTypesLiterals[number],
  color: string,
  size: typeof productSizesLiterals[number],
  inStock: boolean,
  dateReceipt: string,
}

class Product implements IProduct {
  id: number =  _.uniqueId();
  name: string = faker.commerce.productName();
  type: typeof productTypesLiterals[number] = faker.random.arrayElement(productTypes);
  color: string = getRandomColor();
  size: typeof productSizesLiterals[number] = faker.random.arrayElement(productSizes);
  inStock: boolean = faker.random.boolean();
  dateReceipt: string = format(new Date(faker.date.past()), 'yyyy-MM-dd');
}

const dataset = Array.from(Array(datasetSize).keys()).map(() => new Product());

const json = JSON.stringify(dataset);
fs.writeFile('./app/renderer/assets/products.json', json, 'utf8', () => ({}));
