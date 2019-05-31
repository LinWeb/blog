import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Row, Col, Spin, BackTop } from 'antd';
import Header from '@/component/web/header/index';
import Sider from '@/component/web/sider/index';
import RouterConfig from '@/config/routerConfig';
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { loading } = this.props
    return (
      <Router>
        <div>
          <Header>header</Header>
          <Row >
            <Col span={5} > <Sider></Sider></Col>
            <Col span={19}>
              <Spin tip="Loading..." spinning={loading}>
                <div id='main-body' style={{ height: 'calc(100vh - 73px)', overflowY: 'auto' }}>
                  <Switch>
                    {RouterConfig.map((res, key) =>
                      <Route {...res} key={key} />
                    )}
                  </Switch>
                  <BackTop target={() => document.getElementById('main-body')} className='BackTop' />
                </div>
              </Spin>
            </Col>
          </Row>
        </div>
        {/* <Route exact path='/' component={App}></Route> */}
        {/* <Route path='/admin' component={Admin}></Route> */}
      </Router>
    );
  }
}

let mapStateToProps = state => {
  let { loading } = state.common
  return {
    loading
  }
}
export default connect(mapStateToProps)(App);
