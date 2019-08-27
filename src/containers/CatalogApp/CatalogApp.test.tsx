/*
import * as React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure, shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import { Menu } from './index';
import {Layout} from 'antd';
const { Header } = Layout;
configure({ adapter: new Adapter() });

export * from 'enzyme';

describe('description', () => {
  it('should have description', () => {
    expect(1 + 2).toBe(3);
  });
});

describe('test', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });
 
  it('exists', () => {
    const wrapper = shallow(<Menu />);
    console.log(wrapper);
    expect(window.document).toBeDefined();
    expect(wrapper).toBeDefined();
    expect(wrapper).toContainReact(<Header>Schemata</Header>);
  });
});
*/