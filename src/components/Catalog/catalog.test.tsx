import { shallow } from 'enzyme';
import React from "react";
import { ProductsContainer } from '../../containers/ProductsContainer';
import { FiltersContainer } from '../../containers/FiltersContainer';
import { Catalog } from "./";

describe("Catalog", () => {
  it("renders products and filters", () => {
    const wrapper = shallow(<Catalog />);
    expect(wrapper.exists(ProductsContainer)).toBeTruthy();
    expect(wrapper.exists(FiltersContainer)).toBeTruthy();
  });
});
