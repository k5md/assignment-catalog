import * as React from 'react';
import { Form, Select, Checkbox, DatePicker, Button } from 'antd';
import moment from 'moment';
import { SketchPicker } from 'react-color';
const { RangePicker } = DatePicker;
const { Option } = Select;

const dateFormat = 'YYYY-MM-DD';

import { observer, inject } from 'mobx-react';
import { STORE_PRODUCTS, FilterTypes } from '../../constants';

@inject(STORE_PRODUCTS)
@observer
export class Filters extends React.Component {
  render() {
    const toggle = () => {
      this.props[STORE_PRODUCTS]._filters[1].toggle();
    };

    const inStock = this.props[STORE_PRODUCTS]._filters[1].inStock;

    return (
      <React.Fragment>
        <div>Filters</div>
        <Form>
          <Form.Item label="Тип">
            <Select
              showSearch
              style={{ width: 200 }}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Цвет">
            <SketchPicker />
          </Form.Item>
          <Form.Item label="Размер">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>
          <Form.Item label="В наличии">
            <Checkbox onChange={() => toggle()} value={inStock}></Checkbox>
          </Form.Item>
          <Form.Item>
            <RangePicker
              defaultValue={[moment('2015-01-01', dateFormat), moment('2015-01-01', dateFormat)]}
              format={dateFormat}
            />
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}
