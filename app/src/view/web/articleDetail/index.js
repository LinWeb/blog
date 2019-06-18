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

    getArticleDetail(pathname) {
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
    UNSAFE_componentWillReceiveProps(nextProps) {
        let { pathname: nextPathname } = nextProps.location
        let { pathname: currentPathname } = this.props.location
        if (nextPathname !== currentPathname) {
            this.getArticleDetail(nextPathname);
        }
    }
    UNSAFE_componentWillMount() {
        let { pathname } = this.props.location
        this.getArticleDetail(pathname);
    }
    render() {
        let { commentsTotal } = this.props
        let { articleDetailData, articleId } = this.state
        let { title, createdAt, readCount, tags, categories, content } = articleDetailData
        return (
            <div className='article-detail-container'>
                <h2 className='title'>{title}</h2>
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
    let commentsTotal = state.comment.commentListData.commentList.length
    return {
        commentsTotal
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetArticleDetail: params => dispatch(getArticleDetail(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
