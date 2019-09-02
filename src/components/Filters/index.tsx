import React from 'react';
import { Input } from 'antd';
import { Checkbox, DateRange, Select } from '../';
import styles from './styles.css';

const { Group: InputGroup } = Input;

export const Filters = ({
	type,
	stock,
	size,
	dateRange,
}) => (
	<InputGroup className={styles.container}>
		<Select
			title="Тип"
			value={type.value}
			onChange={value => type.setValue(value)}
			isEnabled={type.enabled}
			toggle={type.toggle}
			options={ ['Белье', 'Штанишки', 'Верхняя одежда']}
		/>
		<Checkbox
			title="В наличии"
			value={stock.value}
			onChange={({ target: { checked } }) => stock.setValue(checked)}
			isEnabled={stock.enabled}
			toggle={stock.toggle}
		/>
		<Select
			title="Размер"
			value={size.value}
			onChange={value => size.setValue(value)}
			isEnabled={size.enabled}
			toggle={size.toggle}
			options={['S', 'M', 'L', 'XL']}
		/>
		<DateRange
			title="Период"
			value={dateRange.value.map(d => moment(d))}
			onChange={(moments, formatted) => dateRange.setValue(formatted)}
			isEnabled={dateRange.enabled}
			toggle={dateRange.toggle}
		/>
	</InputGroup>
);
