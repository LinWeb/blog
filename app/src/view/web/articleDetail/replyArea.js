import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import { replyAdd } from '@/store/reply/action'
import { connect } from 'react-redux'
const { TextArea } = Input;

class Reply extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            content: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        let { commentId, dispatchReplyAdd, hideReply } = this.props
        let { content } = this.state
        this.setState(() => ({
            loading: true
        }))
        dispatchReplyAdd({
            commentId, content
        }).then(data => {
            if (data) {
                if (data.status) {
                    this.setState(() => ({
                        content: ''
                    }))
                    hideReply()
                }
            }
            this.setState(() => ({
                loading: false
            }))
        })
    }
    onChange = (e) => {
        let value = e.target.value;
        this.setState(() => ({
            content: value
        }))
    }
    render() {
        let { name } = this.props
        let { loading, content } = this.state
        return (
            <div className='reply-area'>
                <TextArea value={content} onChange={this.onChange} placeholder={`回复${name}...`} rows={2} />
                <Button htmlType="submit" onClick={this.handleSubmit} className='reply-submit' loading={loading} type="primary">回复</Button>
            </div>
        );
    }
}

let mapDispatchToProps = dispatch => ({
    dispatchReplyAdd: (params) => dispatch(replyAdd(params))
})
export default connect(null, mapDispatchToProps)(Form.create({ name: 'comment' })(Reply))

