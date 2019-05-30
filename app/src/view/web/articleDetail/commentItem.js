import React, { Component, useState } from 'react';
import { Comment, Avatar } from 'antd';
import { connect } from 'react-redux'
import ReplyArea from './replyArea'
import marked from '@/lib/marked'

const Actions = function ({ username, commentId }) {
    let [show, setShow] = useState(false)
    return (
        <div>
            <span onClick={() => { setShow(!show) }} className='reply' >{show ? '收起' : '回复'}</span>
            {show && <ReplyArea username={username} hideReply={() => { setShow(false) }} commentId={commentId} />}
        </div>
    )
}
class CommentItem extends Component {
    render() {
        let { children, data, categoryColors } = this.props
        let { id, userId, user, createdAt, content, replies } = data
        let avatarBgColor = categoryColors[(userId - 1) % 11]
        return (
            <Comment
                actions={[replies ? <Actions commentId={id} username={user.name} /> : null]}
                author={<a>{user.name}</a>}
                datetime={createdAt}
                avatar={
                    <Avatar size={36} style={{ backgroundColor: avatarBgColor, }} >
                        {user.name}
                    </Avatar>
                }
                content={
                    <div className='markdown-content' dangerouslySetInnerHTML={{ __html: marked(content || '') }}></div>
                }
            >
                {children}
            </Comment>
        )
    }
}

let mapStateToProps = state => {
    let { categoryColors } = state.category
    return {
        categoryColors
    }
}
export default connect(mapStateToProps)(CommentItem)
