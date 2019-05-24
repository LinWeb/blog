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
    changeSelectNav = ({ key }) => {
        this.setState(() => ({
            currentKey: key
        }))
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        let { navData } = this.state
        let { pathname } = nextProps.location
        let include = navData.find((item) => item.pathname === pathname)
        if (!include) {
            this.changeSelectNav({ key: '' })
        }
    }
    render() {
        let { currentKey, navData } = this.state
        return (
            <div className='nav'>
                <Menu mode="horizontal" className='nav-ul' selectedKeys={[currentKey]} onClick={this.changeSelectNav}>
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