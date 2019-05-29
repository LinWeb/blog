import React, { Component } from 'react';
import { Divider, Icon, Tag } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import marked from '@/lib/marked'

class ArticleList extends Component {
    render() {
        let { data, tagColors, categoryColors, history } = this.props
        return (<ul className='article-list'>
            {data.map((item, key) =>
                <li className='item' key={key} onClick={
                    (e) => {
                        e.stopPropagation()
                        history.push('/article/id/' + item.id)
                    }
                }>
                    <Divider orientation="left"><span className='title'>{item.title}</span> <span className='createdAt'>{item.createdAt}</span></Divider>
                    <div className='content article-content' dangerouslySetInnerHTML={{ __html: marked(item.content || '') }}></div>
                    <div className='footer'>
                        <Icon type="eye" className='icon' />{item.readCount}
                        <Divider type="vertical" />
                        <Icon type="message" className='icon' />{item.comments ? item.comments.length : 0}
                        <Divider type="vertical" />
                        <Icon type="tags" className='icon' />
                        {item.tags && item.tags.map((tag, key) =>
                            <Tag className='tag' color={tagColors[key % 11]} key={key} onClick={
                                (e) => {
                                    e.stopPropagation()
                                    history.push({ pathname: '/tag/' + tag.name, state: { type: 'Tag', tagName: tag.name } })
                                }
                            }>{tag.name}</Tag>
                        )}
                        <Divider type="vertical" />
                        <Icon type="bars" className='icon' />
                        {item.categories && item.categories.map((category, key) =>
                            <Tag className='category' color={categoryColors[key % 11]} key={key} onClick={
                                (e) => {
                                    e.stopPropagation()
                                    history.push({ pathname: '/category/' + category.name, state: { type: 'Category', categoryName: category.name } })
                                }
                            }>{category.name}</Tag>
                        )}
                    </div>
                </li>
            )}
        </ul>)
    }
}

let mapStateToProps = state => {
    let { tagColors } = state.tag
    let { categoryColors } = state.category

    return {
        tagColors, categoryColors
    }
}

export default withRouter(connect(mapStateToProps)(ArticleList))