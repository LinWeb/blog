import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getComments } from '@/store/comment/action'
import CommentItem from './commentItem'
import { Spin, Icon } from 'antd'

class CommentList extends Component {
    UNSAFE_componentWillMount() {
        let { dispatchGetComments, articleId } = this.props
        dispatchGetComments({ articleId })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        let { articleId: nextArticleId } = nextProps
        let { articleId: currentArticleId, dispatchGetComments } = this.props
        if (nextArticleId !== currentArticleId) {
            dispatchGetComments({ articleId: nextArticleId })
        }
    }
    componentDidMount() {
        document.getElementById('main-body').addEventListener('scroll', (e) => {
            let clientHeight = e.target.clientHeight
            let scrollHeight = e.target.scrollHeight
            let scrollTop = e.target.scrollTop
            if (clientHeight + scrollTop === scrollHeight) {
                let { dispatchGetComments, articleId, pageCount, currentPage } = this.props
                currentPage < pageCount && dispatchGetComments({ articleId, currentPage: currentPage + 1 })
            }
        })
    }
    render() {
        let { commentList, pageCount, currentPage } = this.props
        return (
            <div className='comment-list'>
                {commentList.map((comment, key) => (
                    <CommentItem key={key} data={comment}>
                        {comment.replies.map((reply, key) => (
                            <CommentItem key={key} data={reply} />
                        ))}
                    </CommentItem>
                ))}
                <div className='bottom' style={{ textAlign: 'center', margin: '12px auto 24px' }}>
                    <Spin spinning={currentPage < pageCount} indicator={<Icon type="loading" style={{ fontSize: 24, }} spin />}></Spin>
                </div>
            </div>
        )
    }
}
let mapStateToProps = state => {
    let { commentList, pager } = state.comment.commentListData
    let { currentPage, pageCount } = pager
    return {
        currentPage,
        pageCount,
        commentList,
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetComments: (params) => dispatch(getComments(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
