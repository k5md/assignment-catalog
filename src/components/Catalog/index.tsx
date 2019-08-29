import * as React from 'react';
import { Row, Col } from 'antd';
import { Products } from '../../containers/Products';
import { FiltersContainer } from '../../containers/FiltersContainer';
import * as styles from './styles.css';

export const Catalog = () => (
  <Row gutter={24} className={styles.root}>
    <Col span={18} className={styles.content}>
      <Products />
    </Col>
    <Col span={6} className={styles.sider}>
      <FiltersContainer />
    </Col>
  </Row>
);
