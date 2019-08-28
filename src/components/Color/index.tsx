import * as React from 'react';
import { Input, Button, Row, Col } from 'antd';

export class Color extends React.Component {
  render() {
    const { value, onChange, isEnabled, toggle, title } = this.props;

    return (
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
  }
}
