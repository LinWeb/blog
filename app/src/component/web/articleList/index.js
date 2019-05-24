import React, { Component } from 'react';
import { Divider, Icon, Tag } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class ArticleList extends Component {
    onChange = () => {

    }
    render() {
        let { data, tagColors, categoryColors, history } = this.props
        return (<ul className='article-list'>
            {data.map((item, key) =>
                // <Link to={'/article/id/' + item.id} key={key}>
                <li className='item' >
                    <Divider orientation="left">{item.title}</Divider>
                    <div className='content'>
                        {item.content}
                    </div>
                    <div className='footer'>
                        <Icon type="eye" className='icon' />{item.readCount}
                        <Divider type="vertical" />
                        <Icon type="message" className='icon' />{item.comments.length}
                        <Divider type="vertical" />
                        <Icon type="tags" className='icon' />
                        {item.tags.map((tag, key) =>
                            <Tag color={tagColors[key % 11]} key={key} onClick={
                                (e) => {
                                    e.stopPropagation()
                                    history.push({ pathname: '/tag/' + tag.name, state: { type: 'Tag', tagName: tag.name } })
                                }
                            }>{tag.name}</Tag>
                        )}
                        <Divider type="vertical" />
                        <Icon type="bars" className='icon' />
                        {item.categories.map((category, key) =>
                            <Tag color={categoryColors[key % 11]} key={key} onClick={
                                (e) => {
                                    e.stopPropagation()
                                    history.push({ pathname: '/category/' + category.name, state: { type: 'Category', categoryName: category.name } })
                                }
                            }>{category.name}</Tag>
                        )}
                    </div>
                </li>
                // </Link>
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