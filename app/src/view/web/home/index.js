import React, { Component } from 'react';
import { Divider, Icon, Tag } from 'antd';
import './index.scss'
import API from '@/services/index'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleListData: []
        }

    }
    async getArticles() {
        let res = await API.GET_ARTICLES({})
        if (res) {
            let { status, response } = res
            if (status) {
                this.setState(() => ({
                    articleListData: response
                }))
            }
        }
    }
    UNSAFE_componentWillMount() {
        this.getArticles()
    }
    render() {
        let { articleListData } = this.state;
        return (
            <div className='home-container'>
                <ul className='article-list'>
                    {articleListData.map((item, key) =>
                        <li className='item' key={key} >
                            <Divider orientation="left">{item.title}</Divider>
                            <div className='content'>
                                {item.content}
                            </div>
                            <div className='footer'>
                                <Icon type="eye" className='icon' />{item.readCount}
                                <Divider type="vertical" />
                                <Icon type="message" className='icon' />{item.readCount}
                                <Divider type="vertical" />
                                <Icon type="tags" className='icon' />
                                {item.tags.map(tag =>
                                    <Tag color="magenta">{tag.name}</Tag>
                                )}
                                <Divider type="vertical" />
                                <Icon type="bars" className='icon' />
                                <Tag color="#f50">#f50</Tag>
                                <Tag color="#2db7f5">#2db7f5</Tag>
                            </div>
                        </li>
                    )} </ul>
            </div >
        )
    }
}

export default Home