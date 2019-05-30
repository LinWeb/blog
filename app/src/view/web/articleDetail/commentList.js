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
        let { commentListData, } = this.props
        return (
            <div className='comment-list'>
                {commentListData.map((comment, key) => (
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
    let { commentListData } = state.comment
    return {
        commentListData,
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetComments: (params) => dispatch(getComments(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
