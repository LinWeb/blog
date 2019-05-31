import React, { Component } from 'react';
import { Divider, Icon, Tag } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './index.scss'

class ArticleInfo extends Component {
    render() {
        let { children, history, tagColors, categoryColors, } = this.props
        let { readCount, commentsTotal, tags, categories } = this.props.data
        return (
            <div className='article-info'>
                {children}
                <Icon type="eye" className='icon' />{readCount}
                <Divider type="vertical" />
                <Icon type="message" className='icon' />{commentsTotal}
                <Divider type="vertical" />
                <Icon type="tags" className='icon' />
                {tags && tags.map((tag, key) =>
                    <Tag className='tag' color={tagColors[key % 11]} key={key} onClick={
                        (e) => {
                            e.stopPropagation()
                            history.push({ pathname: '/tag/' + tag.name, state: { type: 'Tag', tagName: tag.name } })
                        }
                    }>{tag.name}</Tag>
                )}
                <Divider type="vertical" />
                <Icon type="bars" className='icon' />
                {categories && categories.map((category, key) =>
                    <Tag className='category' color={categoryColors[key % 11]} key={key} onClick={
                        (e) => {
                            e.stopPropagation()
                            history.push({ pathname: '/category/' + category.name, state: { type: 'Category', categoryName: category.name } })
                        }
                    }>{category.name}</Tag>
                )}
            </div>

        )
    }
}
let mapStateToProps = state => {
    let { tagColors } = state.tag
    let { categoryColors } = state.category
    return {
        tagColors, categoryColors
    }
}

export default withRouter(connect(mapStateToProps)(ArticleInfo))