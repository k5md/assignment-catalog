import * as React from 'react';
import { Input, Button, Row, Col } from 'antd';

export interface ColorProps {
  value: Array<string>,
  onChange: Function,
  isEnabled: boolean,
  toggle: Function,
  title: string,
}

export const Color = ({
  value,
  onChange,
  isEnabled,
  toggle,
  title
}) => (
  <Row type="flex" align="middle" justify="space-between">
    <Col>
      <Button type={isEnabled ? 'primary' : 'dashed'} onClick={() => toggle()}>{title}</Button>
    </Col>
    <Col>
      <Input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: '3em' }}
      />
    </Col>
  </Row>
);
