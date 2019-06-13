import React, { Component } from 'react';
import { Layout } from 'antd';
import UserHead from './userHead'
import './index.scss'
const { Header: AntdHeader } = Layout;

class Header extends Component {
    render() {
        return (
            <AntdHeader className='header-container'>
                <UserHead></UserHead>
            </AntdHeader>
        )
    }
}

export default Header