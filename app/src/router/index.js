import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Row, Col } from 'antd';
import Header from '@/component/web/header/index';
import Sider from '@/component/web/sider/index';
import RouterConfig from '@/config/router_config';

function App() {
  return (
    <Router>
      <div>
        <Header>header</Header>
        <Row >
          <Col span={5} > <Sider></Sider></Col>
          <Col span={19}>
            <div style={{ height: 'calc(100vh - 73px)', overflowY: 'auto' }}>
              <Switch>
                {RouterConfig.map((res, key) =>
                  <Route {...res} key={key} />
                )}
              </Switch>
            </div>
          </Col>
        </Row>
      </div>
      {/* <Route exact path='/' component={App}></Route> */}
      {/* <Route path='/admin' component={Admin}></Route> */}
    </Router>
  );
}

export default App;
