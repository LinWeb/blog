import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <Menu mode="horizontal" className='nav-ul'>
                    <Menu.Item key="home" className='item'>
                        <Link to="/">
                            <Icon type="home" />
                            首页
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="edit" className='item'>
                        <Link to="/arrange">
                            <Icon type="edit" />
                            归档
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="bars" className='item'>
                        <Link to="/categories">
                            <Icon type="bars" />
                            分类
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="user" className='item'>
                        <Link to="/about">
                            <Icon type="user" />
                            关于
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Nav