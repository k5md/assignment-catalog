import * as React from 'react';
import { DatePicker, Button, Row, Col } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

export interface DateRangeProps {
  value: Array<string>,
  onChange: Function,
  isEnabled: boolean,
  toggle: Function,
  title: string,
  dateFormat?: string,
}

export const DateRange = ({
  value,
  onChange,
  isEnabled,
  toggle,
  title,
  dateFormat = 'YYYY-MM-DD',
}: DateRangeProps) => (
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
