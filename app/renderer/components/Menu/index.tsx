import * as React from 'react';
import { Layout, Row, Col, Button } from 'antd';

const { Header, Content } = Layout;

export class Menu extends React.Component {
  render() {
    return (
      <Layout>
        <Header>Schemata</Header>
        <Content>
          <Row type="flex" justify="center">
            <Col><Button>Play</Button></Col>
          </Row>
          <Row type="flex" justify="center">
            <Col><Button>Options</Button></Col>
          </Row>
          <Row type="flex" justify="center">
            <Col><Button>Exit</Button></Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
