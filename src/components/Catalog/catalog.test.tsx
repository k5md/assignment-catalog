import { shallow } from 'enzyme';
import React from "react";
import { Products } from '../Products';
import { Filters } from '../Filters';
import { CatalogApp } from "./";

describe("CatalogApp", () => {
  it("renders products and filters", () => {
    const wrapper = shallow(<CatalogApp />);
    expect(wrapper.exists(Products)).toBeTruthy();
    expect(wrapper.exists(Filters)).toBeTruthy();
  });
});
