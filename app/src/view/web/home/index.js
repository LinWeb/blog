import React, { Component } from 'react';
import { Divider, Icon, Tag } from 'antd';
import './index.scss'
import API from '@/services/index'
class Home extends Component {
    async getArticles() {
        let res = await API.GET_ARTICLES({})
    }
    UNSAFE_componentWillMount() {
        this.getArticles()
    }
    render() {
        return (
            <div className='home-container'>
                <ul className='article-list'>
                    <li className='item'>
                        <Divider orientation="left">JavaScript闭包</Divider>
                        <div className='content'>
                            koa 的上下文（ctx）直接提供了 cookie 读取和写入的方法
                            ctx.cookies.get(name,[optins]):读取上下文请求中的 cookie。
                            ctx.cookies.set(name,value,[options])：在上下文中写入 cookie。
                        </div>
                        <div className='footer'>
                            <Icon type="eye" className='icon' />22
                            <Divider type="vertical" />
                            <Icon type="message" className='icon' />222
                            <Divider type="vertical" />
                            <Icon type="tags" className='icon' />
                            <Tag color="magenta">magenta</Tag>
                            <Tag color="red">red</Tag>
                            <Divider type="vertical" />
                            <Icon type="bars" className='icon' />
                            <Tag color="#f50">#f50</Tag>
                            <Tag color="#2db7f5">#2db7f5</Tag>
                        </div>
                    </li>
                    <li className='item'>
                        <Divider orientation="left">JavaScript闭包</Divider>
                        <div className='content'>
                            koa 的上下文（ctx）直接提供了 cookie 读取和写入的方法
                            ctx.cookies.get(name,[optins]):读取上下文请求中的 cookie。
                            ctx.cookies.set(name,value,[options])：在上下文中写入 cookie。
                        </div>
                        <div className='footer'>
                            <Icon type="eye" className='icon' />22
                            <Divider type="vertical" /> <Icon type="message" className='icon' />222
                            <Divider type="vertical" />
                            <Icon type="tags" className='icon' />
                            <Tag color="magenta">magenta</Tag>
                            <Tag color="red">red</Tag>
                            <Divider type="vertical" />
                            <Icon type="bars" className='icon' />
                            <Tag color="#f50">#f50</Tag>
                            <Tag color="#2db7f5">#2db7f5</Tag>
                        </div>
                    </li>
                </ul>
            </div >
        )
    }
}

export default Home