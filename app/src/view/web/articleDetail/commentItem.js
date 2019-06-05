import React, { Component, Fragment, useState } from 'react';
import { Comment, Avatar, Tooltip } from 'antd';
import { connect } from 'react-redux'
import ReplyArea from './replyArea'
import marked from '@/lib/marked'
import moment from 'moment'
import 'moment/locale/zh-cn'
import headImg from '@/assets/images/bloger-head.jpg'

const Actions = function ({ username, commentId }) {
    let [show, setShow] = useState(false)
    return (
        <Fragment>
            <span onClick={() => { setShow(!show) }} className='reply' >{show ? '收起' : '回复'}</span>
            {show && <ReplyArea username={username} hideReply={() => { setShow(false) }} commentId={commentId} />}
        </Fragment>
    )
}
class CommentItem extends Component {
    render() {
        let { children, data, categoryColors, currentUseId, currentName } = this.props
        let { id, userId, user, createdAt, content, replies } = data
        let avatarBgColor = categoryColors[(userId - 1) % 11]
        if (currentUseId === userId) {
            user['name'] = currentName
        }
        return (
            <Comment
                actions={[replies ? <Actions commentId={id} username={user.name} /> : null]}
                author={user.auth ? '作者' : user.name}
                datetime={
                    <Tooltip title={moment(createdAt).format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment(createdAt).fromNow()}</span>
                    </Tooltip>
                }
                avatar={
                    user.auth ?
                        <Avatar size={36} src={headImg} />
                        : <Avatar size={36} style={{ backgroundColor: avatarBgColor, }} >
                            {user.name.substring(0, 1)}
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
    let { userId: currentUseId, name: currentName } = state.user
    return {
        currentUseId, currentName, categoryColors
    }
}
export default connect(mapStateToProps)(CommentItem)
