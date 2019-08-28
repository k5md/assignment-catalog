/*import { mount } from 'enzyme';
import React from "react";
import { Button, Input } from 'antd';

import { Select } from "./"

describe("Select", function() {
  it("renders select, options, and a labeled button", () => {
    const onChange = jest.fn();
    const toggle = jest.fn();

    const props = {
      value: '#fffffa',
      onChange,
      isEnabled: true,
      toggle,
      title: 'Test',
    };

    const wrapper = mount(<Select {...props} />);
    const Select = wrapper.find(Input);
    const button = wrapper.find(Button);

    expect(Select.instance().props.value).toEqual(props.value);
    expect(button.instance().props.children).toEqual(props.title);

    button.at(0).simulate('click');
    expect(toggle).toHaveBeenCalled();
    Select.instance().props.onChange({ target: { value: '#aaafff' } });
    expect(onChange).toHaveBeenCalled();
  });
})
*/