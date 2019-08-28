import * as React from 'react';
import { Checkbox as AntCheckbox, Row, Col, Button } from 'antd';

export interface CheckboxProps {
  value: boolean,
  onChange: Function,
  isEnabled: boolean,
  toggle: Function,
  title: string,
}

export const Checkbox = ({
  value,
  onChange,
  isEnabled,
  toggle,
  title,
}: CheckboxProps) => (
  <Row type="flex" align="middle" justify="space-between">
    <Col>
      <Button type={isEnabled ? 'primary' : 'dashed'} onClick={() => toggle()}>{title}</Button>
    </Col>
    <Col>
      <AntCheckbox onChange={(e) => onChange(e.target.checked)} checked={value}></AntCheckbox>
    </Col>
  </Row>
);
