import state from './state'
import { GET_COMMENTS, COMMENT_ADD, COMMENT_DEL, REPLY_ADD, REPLY_DEL } from '../actionTypes'
import { getAuth } from '@/lib/checkAuth'
let initState = state

const user = (state = initState, { type, data }) => {
    switch (type) {
        case GET_COMMENTS:
            var { commentList } = state.commentListData
            var { currentPage } = data.pager
            var newCommentListData = {
                pager: { ...data.pager },
                commentList: [...(currentPage === 1 ? [] : commentList), ...data.commentList]
            }
            return Object.assign({}, state, { commentListData: newCommentListData })
        case COMMENT_ADD:
            var { id, content, createdAt, userId, replies, user, auth } = data
            var { pager, commentList } = state.commentListData
            var newCommentItem = { id, content, createdAt, userId, replies, user, auth }
            var newCommentListData = {
                pager: { ...pager, total: pager.total + 1 },
                commentList: [newCommentItem, ...commentList]
            }
            return Object.assign({}, state, { commentListData: newCommentListData })
        case COMMENT_DEL:
            var { id } = data
            var { pager, commentList } = state.commentListData
            var newCommentList = commentList.filter(item => item.id !== id)
            return Object.assign({}, state, { commentListData: { pager, commentList: newCommentList } })
        case REPLY_ADD:
            var { id, commentId, content, createdAt, userId, user } = data
            var { pager, commentList } = state.commentListData
            var newReplyItem = { id, commentId, content, createdAt, userId, user };
            var newCommentList = commentList.map(item => {
                let obj = { ...item }
                if (item.id === commentId) {
                    obj['replies'] = [newReplyItem, ...obj.replies]
                }
                return obj
            })
            var newCommentListData = {
                pager: { ...pager },
                commentList: newCommentList
            }
            return Object.assign({}, state, { commentListData: newCommentListData })
        case REPLY_DEL:
            var { id, commentId } = data
            var { pager, commentList } = state.commentListData
            var newCommentList = commentList.map(item => {
                if (item.id === commentId) {
                    item.replies = item.replies.filter(reply => reply.id !== id)
                }
                return item
            })
            return Object.assign({}, state, { commentListData: { pager, commentList: newCommentList } })
        default:
            return state
    }
}

export default user