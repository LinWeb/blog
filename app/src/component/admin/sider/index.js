import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import './index.scss'
import { withRouter } from 'react-router-dom'
const { Sider: AntdSlider } = Layout;
const { SubMenu } = Menu;
class Sider extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    onClick = ({ key }) => {
        let { history } = this.props
        history.push(key)
    }
    render() {
        return (
            <AntdSlider trigger={null} collapsible collapsed={this.state.collapsed}
                className='sider-container'>
                <div className="logo" />
                <Menu theme="dark" mode="inline"
                    defaultSelectedKeys={['/admin']}
                    defaultOpenKeys={['article']}
                    onClick={this.onClick}
                >
                    <SubMenu
                        key="article"
                        title={
                            <span>
                                <Icon type="edit" />
                                <span>文章管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="/admin/article/add">新增文章</Menu.Item>
                        <Menu.Item key="/admin"> 文章列表</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/admin/user/list">
                        <Icon type="user" />
                        <span>用户管理</span>
                    </Menu.Item>
                </Menu>
            </AntdSlider>
        );
    }
}
export default withRouter(Sider);
