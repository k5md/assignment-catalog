import { mount } from 'enzyme';
import React from "react";
import { DatePicker, Button } from 'antd';
import moment from 'moment';
import { DateRange } from "./"

const { RangePicker } = DatePicker;

describe("DateRange", () => {
	it("renders a rangePicker with a labeled button", () => {
		const onChange = jest.fn();
		const toggle = jest.fn();

		const props = {
			value: [moment('2010-10-10'), moment('2010-10-11')],
			onChange,
			isEnabled: true,
			toggle,
			title: 'Test',
		};

		const wrapper = mount(<DateRange {...props} />);
		const rangePicker = wrapper.find(RangePicker);
		const button = wrapper.find(Button);

		expect(rangePicker.instance().props.value).toEqual(props.value);
		expect(button.instance().props.children).toEqual(props.title);

		button.at(0).simulate('click');
		expect(toggle).toHaveBeenCalled();
		rangePicker.instance().props.onChange(null, props.value);
		expect(onChange).toHaveBeenCalled();
	});
})
