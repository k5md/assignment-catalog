import * as React from 'react';
import { DatePicker, Button, Row, Col } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

export class DateRange extends React.Component {
  render() {
    const { value, onChange, isEnabled, toggle, title } = this.props;
    return (
      <Row type="flex" align="middle" justify="space-between">
        <Col>
          <Button type={isEnabled ? 'primary' : 'dashed'} onClick={() => toggle()}>{title}</Button>
        </Col>
        <Col>
          <RangePicker
            value={value.map(d => moment(d))}
            format={dateFormat}
            onChange={(moments, formatted) => onChange(...formatted)}
          />
        </Col>
      </Row>
    );
  }
}
