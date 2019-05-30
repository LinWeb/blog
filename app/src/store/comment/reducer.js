import state from './state'
import { GET_COMMENTS, COMMENT_ADD, REPLY_ADD } from '../actionTypes'
let initState = state
const user = (state = initState, { type, data }) => {
    switch (type) {
        case GET_COMMENTS:
            return Object.assign({}, state, { commentListData: data })
        case COMMENT_ADD:
            var { id, content, createdAt, userId, replies, user } = data
            var newCommentListData = [{ id, content, createdAt, userId, replies, user }, ...state.commentListData]
            return Object.assign({}, state, { commentListData: newCommentListData })
        case REPLY_ADD:
            var { commentId, content, createdAt, userId, user } = data
            var newReplyData = { commentId, content, createdAt, userId, user };
            var newCommentListData = state.commentListData.map(item => {
                let obj = { ...item }
                if (item.id === commentId) {
                    obj['replies'] = [newReplyData, ...obj.replies]
                }
                return obj
            })
            return Object.assign({}, state, { commentListData: newCommentListData })
        default:
            return state
    }
}
export default user