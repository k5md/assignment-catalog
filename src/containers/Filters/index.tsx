import * as React from 'react';
import { Form, Select, Checkbox, DatePicker, Button, Input, Row, Col } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Group: InputGroup } = Input;
const dateFormat = 'YYYY-MM-DD';
import styles from './styles.css';
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

    const setColor = (color) => {
      this.props[STORE_PRODUCTS]._filters[0].setColor(color);
    }
    const color = this.props[STORE_PRODUCTS]._filters[0].color;

    return (
      <InputGroup className={styles.container}>
        <Row type="flex" align="middle" justify="space-between">
          <Col>Тип</Col>
          <Col>
            <Select
              showSearch
              style={{ width: 200 }}
              optionFilterProp="Все"
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
            </Select>
          </Col>
        </Row>
        <Row type="flex" align="middle" justify="space-between">
          <Col>Цвет</Col>
          <Col>
            <Input type="color" style={{ width: '3em' }}></Input>
          </Col>
        </Row>
        <Row type="flex" align="middle" justify="space-between">
          <Col>Размер</Col>
          <Col>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Все"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
            </Select>
          </Col>
        </Row>
        <Row type="flex" align="middle" justify="space-between">
            <Col>В наличии</Col>
            <Col>
              <Checkbox onChange={() => toggle()} value={inStock}></Checkbox>
            </Col>
        </Row>
        <Row type="flex" align="middle" justify="space-between">
          <Col>Период</Col>
          <Col>
            <RangePicker
              defaultValue={[moment('2015-01-01', dateFormat), moment('2015-01-01', dateFormat)]}
              format={dateFormat}
            />
          </Col>
        </Row>
      </InputGroup>
    );
  }
}
