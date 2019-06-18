import React, { Component } from 'react';
import { Divider } from 'antd';
import marked from '@/lib/marked'
import { withRouter } from "react-router-dom";
import ArticleInfo from '../articleInfo'
import moment from 'moment'
import './index.scss'
class ArticleList extends Component {
    render() {
        let { data, history } = this.props
        return (<ul className='article-list'>
            {data.map((item, key) =>
                <li className='item' key={key} onClick={
                    (e) => {
                        e.stopPropagation()
                        history.push('/article/' + item.id)
                    }
                }>
                    <Divider orientation="left" className='header'>
                        <span className='title'>{item.title}</span>
                        <span className='createdAt'>{moment(item.createdAt).format('LL')}</span>
                    </Divider>
                    <div className='content markdown-content' dangerouslySetInnerHTML={{ __html: marked(item.content || '') }}></div>
                    <ArticleInfo data={{ ...item, commentsTotal: item.comments ? item.comments.length : 0 }} />
                </li>
            )}
        </ul>)
    }
}

export default withRouter(ArticleList)