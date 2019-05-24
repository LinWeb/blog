import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentKey: 'home',
            navData: [
                {
                    key: 'home',
                    pathname: '/',
                    name: '首页',
                    icon: 'home'
                },
                {
                    key: 'arrange',
                    pathname: '/arrange',
                    name: '归档',
                    icon: 'edit'
                },
                {
                    key: 'categories',
                    pathname: '/categories',
                    name: '分类',
                    icon: 'bars'
                },
                {
                    key: 'about',
                    pathname: '/about',
                    name: '关于',
                    icon: 'user'
                }
            ]
        }
    }
    onClick = ({ key }) => {
        this.setState(() => ({
            currentKey: key
        }))
    }
    // componentDidUpdate() {
    //     // 怎么监听路由的变化
    //     let { currentKey, navData } = this.state
    //     let { pathname } = this.props.location
    //     let include = navData.find((item) => item.pathname === pathname)
    //     if (!include) {
    //         console.log(11111111, pathname)
    //         this.onClick({ key: '' })
    //     }
    // }
    render() {
        let { currentKey, navData } = this.state
        return (
            <div className='nav'>
                <Menu mode="horizontal" className='nav-ul' selectedKeys={[currentKey]} onClick={this.onClick}>
                    {navData.map((nav, key) => (
                        <Menu.Item key={nav.key} className='item'>
                            <Link to={nav.pathname}>
                                <Icon type={nav.icon} />
                                {nav.name}
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </div >
        )
    }
}

export default withRouter(Nav)