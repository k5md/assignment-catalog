import React from 'react';
import { Layout } from 'antd';
import { Products } from '../../containers/Products';
import { FiltersContainer } from '../../containers/FiltersContainer';
import * as styles from './styles.css';

const { Content, Sider } = Layout;

export const Catalog: React.FC = () => (
  <Layout className={styles.root}>
    <Content className={styles.content}>
      <Products />
    </Content>
    <Sider className={styles.sider} theme="light">
      <FiltersContainer />
    </Sider>
  </Layout>
);
