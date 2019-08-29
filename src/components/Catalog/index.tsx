import React from 'react';
import { Layout } from 'antd';
import { ProductsContainer } from '../../containers/ProductsContainer';
import { FiltersContainer } from '../../containers/FiltersContainer';
import * as styles from './styles.css';

const { Content, Sider } = Layout;

export const Catalog: React.FC = () => (
  <Layout className={styles.root}>
    <Content className={styles.content}>
      <ProductsContainer />
    </Content>
    <Sider className={styles.sider} theme="light">
      <FiltersContainer />
    </Sider>
  </Layout>
);
