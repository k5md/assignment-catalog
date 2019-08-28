import * as React from 'react';
import { Select as AntSelect, Button, Row, Col } from 'antd';

const { Option } = AntSelect;

export class Select extends React.Component {
  render() {
    const { value, onChange, isEnabled, toggle, title, options } = this.props;
    return (
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
    return null;
  }
}
