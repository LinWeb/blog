import React, { Component, } from 'react'
import { Spin, Layout, Row, Col, } from 'antd';
import Header from '@/component/admin/header/index';
import Sider from '@/component/admin/sider/index';
import { Route, Switch, } from 'react-router-dom'
import { adminConfig } from '@/config/routerConfig';
import { connect } from 'react-redux'
import NotFound from '@/view/common/404';
const { Content } = Layout;

class Admin extends Component {
    render() {
        let { loading, } = this.props
        return (
            <Row className='admin-root' style={{ minWidth: 1130 }}>
                <Col span={4}><Sider></Sider></Col>
                <Col span={20}>
                    <Header></Header>
                    <Spin tip="Loading..." spinning={loading}>
                        <Content
                            style={{ height: 'calc(100vh - 64px)', overflowY: 'auto' }}
                        >
                            <div style={{ background: '#fff', margin: '12px' }}>
                                <Switch>
                                    {adminConfig.map((res, key) =>
                                        <Route {...res} key={key} />
                                    )}
                                    <Route component={NotFound} />
                                </Switch>
                            </div>
                        </Content>
                    </Spin>
                </Col>
            </Row>
        );
    }
}
let mapStateToProps = state => {
    let { loading } = state.common
    return {
        loading
    }
}
export default connect(mapStateToProps)(Admin)
