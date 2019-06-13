import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import './index.scss'
import { withRouter } from 'react-router-dom'
const { Sider: AntdSlider } = Layout;
const { SubMenu } = Menu;
class Sider extends Component {
    state = {
        menuData: [
            {
                key: 'article',
                title: '文章管理',
                icon: 'edit',
                child: [
                    {
                        key: '/admin/article/add',
                        title: '新增文章',
                    },
                    {
                        key: '/admin',
                        title: '文章列表',
                    }
                ]
            },
            {
                key: '/admin/user/list',
                title: '用户管理',
                icon: 'user',
            }
        ],
        selectedKeys: []
    }
    onClick = ({ key }) => {
        this.setState(() => ({
            selectedKeys: [key]
        }))
        let { history } = this.props
        history.push(key)
    }
    UNSAFE_componentWillMount() {
        let { pathname } = this.props.location
        this.setState(() => ({
            selectedKeys: [pathname]
        }))
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        let { pathname: nextPathname } = nextProps.location
        let { pathname: currentPathname } = this.props.location
        if (nextPathname !== currentPathname) {
            this.setState(() => ({
                selectedKeys: [nextPathname]
            }))
        }
    }
    render() {
        let { menuData, selectedKeys } = this.state
        return (
            <AntdSlider trigger={null} className='sider-container'>
                <div className="logo" />
                <Menu theme="dark" mode="inline"
                    selectedKeys={selectedKeys}
                    defaultOpenKeys={['article']}
                    onClick={this.onClick}
                >
                    {menuData.map(item => (
                        item.child ?
                            <SubMenu
                                key={item.key}
                                title={
                                    <span>
                                        <Icon type={item.icon} />
                                        <span>{item.title}</span>
                                    </span>
                                }
                            >
                                {item.child.map(child => (
                                    <Menu.Item key={child.key}>{child.title}</Menu.Item>
                                ))}
                            </SubMenu>
                            : <Menu.Item key={item.key}><Icon type={item.icon} /> {item.title}</Menu.Item>
                    ))}
                </Menu>
            </AntdSlider>
        );
    }
}
export default withRouter(Sider);
