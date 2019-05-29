import React, { Component } from 'react';
import { getArticleDetail } from '@/store/article/action'
import { connect } from 'react-redux'
import { Divider, Icon, Tag } from 'antd';
import './index.scss'
import marked from '@/lib/marked'

class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleDetailData: {},
        }
    }
    UNSAFE_componentWillMount() {
        let { pathname } = this.props.location
        let arr = pathname.split('/')
        let id = arr[arr.length - 1]
        id && this.props.dispatchGetArticleDetail({ id }).then(data => {
            if (data) {
                if (data.status) {
                    this.setState(() => ({
                        articleDetailData: data.response
                    }))
                }
            }
            // this.setState(() => ({
            //     loading: false
            // }))
        })
    }
    render() {
        let { tagColors, categoryColors, history } = this.props
        let { articleDetailData } = this.state
        let { title, createdAt, readCount, tags, categories, content } = articleDetailData
        return (
            <div className='article-detail-container'>
                <h1 className='title'>标题</h1>
                <div className='info'>
                    <Icon type="contacts" className='icon' />
                    {createdAt}
                    <Divider type="vertical" />
                    <Icon type="eye" className='icon' />{readCount}
                    {/* <Divider type="vertical" />
                    <Icon type="message" className='icon' />{comments ? comments.length : 0} */}
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
                <Divider />
                <div className='content article-content' dangerouslySetInnerHTML={{ __html: marked(content || '') }}></div>
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
let mapDispatchToProps = dispatch => ({
    dispatchGetArticleDetail: params => dispatch(getArticleDetail(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
