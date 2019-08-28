import { mount } from 'enzyme';
import React from "react";
import { Checkbox as AntCheckbox, Button } from 'antd';

import { Checkbox } from "./"

describe("Checkbox", () => {
  it("renders a checkbox with a labeled button", () => {
    const onChange = jest.fn();
    const toggle = jest.fn();

    const props = {
      value: true,
      onChange,
      isEnabled: true,
      toggle,
      title: 'Test',
    };


    const wrapper = mount(<Checkbox {...props} />);
    const checkbox = wrapper.find(AntCheckbox);
    const button = wrapper.find(Button);

    expect(checkbox.instance().props.checked).toEqual(props.value);
    expect(button.instance().props.children).toEqual(props.title);

    button.at(0).simulate('click');
    expect(toggle).toHaveBeenCalled();
    checkbox.instance().props.onChange({ target: { checked: !props.value } });
    expect(onChange).toHaveBeenCalled();
  });
})
