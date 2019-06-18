import React, { Component } from 'react';
import { Icon, Comment, Avatar, Form, Button, Divider, Input } from 'antd';
import { commentAdd } from '@/store/comment/action'
import { connect } from 'react-redux'
import headImg from '@//assets/images/bloger-head.jpg'
const { TextArea } = Input;

class CommentArea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        let { articleId, dispatchCommentAdd } = this.props
        const { validateFields, setFieldsValue } = this.props.form;
        validateFields((err, values) => {
            if (!err) {
                this.setState(() => ({
                    loading: true
                }))
                values['articleId'] = articleId
                dispatchCommentAdd(values).then(data => {
                    if (data) {
                        if (data.status) {
                            setFieldsValue({ content: '' })
                        }
                    }
                    this.setState(() => ({
                        loading: false
                    }))
                })
            }
        })
    }
    render() {
        let { userId, name, auth, categoryColors, total } = this.props
        let avatarBgColor = categoryColors[(userId - 1) % 11]
        const { getFieldDecorator } = this.props.form;
        let { loading } = this.state
        return (
            <div className='comment-area'>
                <div className='title'><span>{total}</span>条评论</div>
                <Divider style={{ margin: '8px 0px 14px' }} />
                <Comment
                    className='comment-form'
                    avatar={
                        auth ?
                            <Avatar size={43} src={headImg} />
                            : <Avatar size={43} style={{ backgroundColor: avatarBgColor, }} >
                                {name.substring(0, 1) || <Icon type="user" />}
                            </Avatar>
                    }
                    content={
                        <Form onSubmit={this.handleSubmit} className="comment-form">
                            <Form.Item style={{ marginBottom: '0px' }}>
                                {getFieldDecorator('content', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入您的评论',
                                        },
                                    ],
                                })(<TextArea rows={4} />)}
                            </Form.Item>
                            <Form.Item style={{ textAlign: 'right' }}>
                                <span className='remark'><Icon type="info-circle" className='icon' />支持 Markdown 语法</span>
                                <Button htmlType="submit" loading={loading} style={{ width: '100px' }} type="primary">提交</Button>
                            </Form.Item>
                        </Form>
                    }
                />
            </div>
        );
    }
}
let mapStateToProps = state => {
    let { userId, name, auth } = state.user
    let { categoryColors } = state.category
    let total = state.comment.commentListData.commentList.length
    return {
        userId, name, auth, categoryColors, total
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchCommentAdd: (params) => dispatch(commentAdd(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'comment' })(CommentArea))

