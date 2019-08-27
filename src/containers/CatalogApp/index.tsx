import * as React from 'react';
import { Row, Col } from 'antd';
import { Products } from '../Products';
import { Filters } from '../Filters';
import * as styles from './styles.css';

export class CatalogApp extends React.Component {
  render() {
    return (
      <Row gutter={24} className={styles.root}>
        <Col span={18} className={styles.content}>
          <Products />
        </Col>
        <Col span={6} className={styles.sider}>
          <Filters />
        </Col>
      </Row>
    );
  }
}
