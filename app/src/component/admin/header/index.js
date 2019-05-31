import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import UserHead from './userHead'
import './index.scss'

const { Header: AntdHeader } = Layout;
class Header extends Component {
    render() {
        return (
            <AntdHeader className='header-container'>
                {/* <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                /> */}
                <UserHead></UserHead>
            </AntdHeader>
        )
    }
}

export default Header