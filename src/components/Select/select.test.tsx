import { mount } from 'enzyme';
import React from "react";
import { Select as AntSelect, Button } from 'antd';
import { Select } from "./"

describe("Select", () => {
  it("renders select and a labeled button", () => {
    const onChange = jest.fn();
    const toggle = jest.fn();

    const props = {
      value: 'Foo',
      onChange,
      isEnabled: true,
      toggle,
      title: 'Test',
      options: ['Foo', 'Bar', 'Baz'],
    };

    const wrapper = mount(<Select {...props} />);
    const select = wrapper.find(AntSelect);
    const button = wrapper.find(Button);

    expect(button.instance().props.children).toEqual(props.title);
    expect(select.instance().props.value).toEqual(props.value);

    button.at(0).simulate('click');
    expect(toggle).toHaveBeenCalled();

    select.instance().props.onChange({ target: { value: 'Bar' } });
    expect(onChange).toHaveBeenCalled();
  });
})
