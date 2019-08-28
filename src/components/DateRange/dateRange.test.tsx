/*import { mount } from 'enzyme';
import React from "react";
import { Button, Input } from 'antd';

import { Color } from "./"

describe("Color", function() {
  it("renders a color picker with a labeled button", () => {
    const onChange = jest.fn();
    const toggle = jest.fn();

    const props = {
      value: '#fffffa',
      onChange,
      isEnabled: true,
      toggle,
      title: 'Test',
    };

    const wrapper = mount(<Color {...props} />);
    const color = wrapper.find(Input);
    const button = wrapper.find(Button);

    expect(color.instance().props.value).toEqual(props.value);
    expect(button.instance().props.children).toEqual(props.title);

    button.at(0).simulate('click');
    expect(toggle).toHaveBeenCalled();
    color.instance().props.onChange({ target: { value: '#aaafff' } });
    expect(onChange).toHaveBeenCalled();
  });
})*/
