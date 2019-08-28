import * as React from 'react';
import { Select as AntSelect, Button, Row, Col } from 'antd';

const { Option } = AntSelect;

export interface SelectProps {
  value: Array<string>,
  onChange: Function,
  isEnabled: boolean,
  toggle: Function,
  title: string,
  options: Array<number | string | boolean>
}

export const Select = ({
  value,
  onChange,
  isEnabled,
  toggle,
  title,
  options,
}) => (
  <Row type="flex" align="middle" justify="space-between">
    <Col>
      <Button type={isEnabled ? 'primary' : 'dashed'} onClick={() => toggle()}>{title}</Button>
    </Col>
    <Col>
      <AntSelect
        value={value}
        onChange={(value) => onChange(value)}
        style={{ width: 200 }}
      >
        {options.map(option => <Option key={_.uniqueId()} value={option}>{option}</Option>)}
      </AntSelect>
    </Col>
  </Row>
);
