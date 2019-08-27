import * as React from 'react';
import { Layout } from 'antd';
import { Products } from '../Products';
import { Filters } from '../Filters';
import * as styles from './styles.css';

const { Content, Sider } = Layout;

export class CatalogApp extends React.Component {
  render() {
    return (
      <Layout className={styles.root}>
        <Content className={styles.content}>
          <Products />
        </Content>
        <Sider className={styles.sider}>
         <Filters />
        </Sider>
      </Layout>
    );
  }
}
