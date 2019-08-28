import * as React from 'react';
import { Checkbox as AntCheckbox, Row, Col, Button } from 'antd';

export class Checkbox extends React.Component {
  render() {
    const { value, onChange, isEnabled, toggle, title } = this.props;
    return (
      <Row type="flex" align="middle" justify="space-between">
        <Col>
          <Button type={isEnabled ? 'primary' : 'dashed'} onClick={() => toggle()}>{title}</Button>
        </Col>
        <Col>
          <AntCheckbox onChange={(e) => onChange(e.target.checked)} checked={value}></AntCheckbox>
        </Col>
      </Row>
    );
  }
}
