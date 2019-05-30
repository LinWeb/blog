import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getComments } from '@/store/comment/action'
import CommentItem from './commentItem'

class CommentList extends Component {
    UNSAFE_componentWillMount() {
        let { dispatchGetComments, articleId } = this.props
        dispatchGetComments({ articleId })
    }
    render() {
        let { commentList } = this.props
        return (
            <div className='comment-list'>
                {commentList.map((comment, key) => (
                    <CommentItem key={key} data={comment}>
                        {comment.replies.map((reply, key) => (
                            <CommentItem key={key} data={reply} />
                        ))}
                    </CommentItem>
                ))}
            </div>
        )
    }
}
let mapStateToProps = state => {
    let { commentList, pager } = state.comment.commentListData
    return {
        commentList,
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetComments: (params) => dispatch(getComments(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
