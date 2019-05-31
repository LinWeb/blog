import React, { Component } from 'react';
import { getArticleDetail } from '@/store/article/action'
import { connect } from 'react-redux'
import { Divider, Icon } from 'antd';
import './index.scss'
import marked from '@/lib/marked'
import CommentArea from './commentArea'
import CommentList from './commentList'
import moment from 'moment'
import ArticleInfo from '@/component/web/articleInfo'

class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleDetailData: {},
            articleId: 0
        }
    }
    UNSAFE_componentWillMount() {
        let { pathname } = this.props.location
        let arr = pathname.split('/')
        let id = arr[arr.length - 1]
        this.setState(() => ({
            articleId: id
        }))
        id && this.props.dispatchGetArticleDetail({ id }).then(data => {
            if (data) {
                if (data.status) {
                    this.setState(() => ({
                        articleDetailData: data.response
                    }))
                }
            }
        })
    }
    render() {
        let { commentsTotal } = this.props
        let { articleDetailData, articleId } = this.state
        let { title, createdAt, readCount, tags, categories, content } = articleDetailData
        return (
            <div className='article-detail-container'>
                <h1 className='title'>{title}</h1>
                <ArticleInfo data={{ readCount, commentsTotal, tags, categories }}>
                    <Icon type="contacts" className='icon' />
                    {moment(createdAt).format('LL')}
                    <Divider type="vertical" />
                </ArticleInfo>
                <Divider />
                <div className='content markdown-content' dangerouslySetInnerHTML={{ __html: marked(content || '') }}></div>
                <div className='comment-container'>
                    <CommentArea articleId={articleId}></CommentArea>
                    <CommentList articleId={articleId}></CommentList>
                </div>
            </div>
        )
    }
}
let mapStateToProps = state => {
    let { total } = state.comment.commentListData.pager
    return {
        commentsTotal: total
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetArticleDetail: params => dispatch(getArticleDetail(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
