import { Product, IProduct } from '../models/ProductModel';
import { types } from 'mobx-state-tree';
import { parse, compareAsc, compareDesc } from 'date-fns';

export const ProductStore = types
  .model({
    products: types.array(Product),
  })
  .views(self => ({
    productsByColor(color: string): Array<IProduct> {
      return self.products.filter(product => product.color === color);
    },
    productsByStock(inStock: boolean): Array<IProduct> {
      return self.products.filter(product => product.inStock === inStock);
    },
    // TODO: refactor names
    productsByDateRange(startDate: string, endDate: string): Array<IProduct> {
      const sDate: Date = parse(startDate, 'yyyy-MM-dd', new Date());
      const eDate: Date = parse(endDate, 'yyyy-MM-dd', new Date());
      return self.products.filter((product) => {
        const cDate: Date = parse(product.dateReceipt, 'yyyy-MM-dd', new Date());
        // Check that currentDate >= startDate AND currentDate <= endDate
        const inRange = compareAsc(cDate, sDate) !== -1 && compareDesc(cDate, eDate) !== -1;
        return inRange;
      });
    },
  }));
