import React from 'react';
import { Checkbox as AntCheckbox, Row, Col, Button } from 'antd';

export interface Checkbox {
	value: boolean,
	onChange: Function,
	isEnabled: boolean,
	toggle: Function,
	title: string,
}

export const Checkbox: React.FC<Checkbox> = ({
	value,
	onChange,
	isEnabled,
	toggle,
	title,
}: Checkbox) => (
	<Row type="flex" align="middle" justify="space-between">
		<Col>
			<Button type={isEnabled ? 'primary' : 'dashed'} onClick={toggle}>{title}</Button>
		</Col>
		<Col>
			<AntCheckbox onChange={onChange} checked={value}></AntCheckbox>
		</Col>
	</Row>
);
