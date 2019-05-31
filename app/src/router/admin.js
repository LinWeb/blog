import React, { Component } from 'react'
import { Layout, Row, Col, } from 'antd';
import Header from '@/component/admin/header/index';
import Sider from '@/component/admin/sider/index';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import RouterConfig from '@/config/routerConfig';

const { Content } = Layout;

class Admin extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Row >
                <Col span={4}><Sider></Sider></Col>
                <Col span={20}>
                    <Header></Header>
                    <Content
                        style={{ background: '#eee', height: 'calc(100vh - 73px)', overflowY: 'auto' }}>
                        <div style={{ background: '#fff', margin: '12px' }}>
                            <Switch>
                                {RouterConfig.admin.map((res, key) =>
                                    <Route {...res} key={key} />
                                )}
                            </Switch>
                        </div>
                    </Content>
                </Col>
            </Row>
        );
    }
}
export default Admin;
