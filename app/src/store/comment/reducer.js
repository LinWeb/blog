import state from './state'
import { GET_COMMENTS, COMMENT_ADD, REPLY_ADD } from '../actionTypes'
let initState = state
const user = (state = initState, { type, data }) => {
    switch (type) {
        case GET_COMMENTS:
            return Object.assign({}, state, { commentListData: data })
        case COMMENT_ADD:
            var { id, content, createdAt, userId, replies, user } = data
            var { pager, commentList } = state.commentListData
            var newCommentItem = { id, content, createdAt, userId, replies, user }
            var newCommentListData = {
                pager: { ...pager, total: pager.total + 1 },
                commentList: [newCommentItem, ...commentList]
            }
            return Object.assign({}, state, { commentListData: newCommentListData })
        case REPLY_ADD:
            var { commentId, content, createdAt, userId, user } = data
            var { pager, commentList } = state.commentListData
            var newReplyItem = { commentId, content, createdAt, userId, user };
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
        default:
            return state
    }
}
export default user