import React, { Component, Fragment } from 'react';
import { Modal, Button, Form, Input, Radio } from 'antd';
import { updateUser } from '@/store/user/action'
import { connect } from 'react-redux'

class UpdateUserModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 1,
            loading: false,
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        let { dispatchUpdateUser, onCancel } = this.props
        const { validateFields } = this.props.form;
        validateFields((err, values) => {
            if (!err) {
                this.setState(() => ({
                    loading: true
                }))
                dispatchUpdateUser(values).then(data => {
                    if (data) {
                        if (data.status) {
                            onCancel()
                        }
                    }
                    this.setState(() => ({
                        loading: false
                    }))
                })
            }
        })
    }
    compareToNextPassword = (rule, value, callback) => {
        const { getFieldValue, validateFields } = this.props.form;
        let confirmPassword = getFieldValue('confirmPassword')
        if (!confirmPassword || !value) {
            callback()
        } else {
            validateFields(['confirmPassword'], (errors, values) => { });
        }
        callback()

    }
    compareToFirstPassword = (rule, value, callback) => {
        const { getFieldValue } = this.props.form;
        let password = getFieldValue('newPassword')
        if (!password || !value) {
            callback()
        } else {
            if (value !== password) {
                callback('两次密码输入不一致')
            }
            callback()
        }
    }
    onChange = (e) => {
        this.setState(() => ({
            type: e.target.value
        }))
    }
    render() {
        const formItemLayout = {
            labelCol: { span: 6, offset: 0 },
            wrapperCol: { span: 17, offset: 0 },
        };
        const submitLayout = {
            wrapperCol: { span: 23, offset: 0 },
        };
        let { isShow, onCancel, username, name } = this.props
        const { getFieldDecorator } = this.props.form;
        let { type, loading } = this.state
        return (
            <Modal
                title="修改用户信息"
                visible={isShow}
                onCancel={onCancel}
                width={434}
                footer={null} >
                <Radio.Group value={type} onChange={this.onChange} style={{ marginBottom: '10px', textAlign: 'right', display: 'block' }}>
                    <Radio value={1}>昵称</Radio>
                    <Radio value={2}>密码</Radio>
                </Radio.Group>
                <Form onSubmit={this.handleSubmit}  {...formItemLayout} className="login-form">
                    <Form.Item label="用户邮箱">
                        <Input disabled value={username} />
                    </Form.Item>
                    {type === 1 ?
                        <Fragment>
                            <Form.Item label="用户昵称">
                                {getFieldDecorator('name', {
                                    initialValue: name,
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户昵称',
                                        },
                                    ],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="密码">
                                {getFieldDecorator('password', {
                                    validateFirst: true,
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入密码',
                                        },
                                    ],
                                })(<Input.Password />)}
                            </Form.Item>
                        </Fragment>
                        : <Fragment>
                            <Form.Item label="原密码">
                                {getFieldDecorator('password', {
                                    validateFirst: true,
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入原密码',
                                        },
                                    ],
                                })(<Input.Password />)}
                            </Form.Item>
                            <Form.Item label="新密码" hasFeedback>
                                {getFieldDecorator('newPassword', {
                                    validateFirst: true,
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入新密码',
                                        },
                                        {
                                            min: 6,
                                            message: '密码长度至少为6'
                                        },
                                        {
                                            validator: this.compareToNextPassword,
                                        },
                                    ],
                                })(<Input.Password />)}
                            </Form.Item>
                            <Form.Item label="确认密码" hasFeedback>
                                {getFieldDecorator('confirmPassword', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入确认密码',
                                        },
                                        {
                                            validator: this.compareToFirstPassword,
                                        },
                                    ],
                                })(<Input.Password />)}
                            </Form.Item>
                        </Fragment>
                    }
                    <Form.Item {...submitLayout}>
                        <Button type="primary" loading={loading} htmlType="submit" style={{ width: '100%', float: 'right' }}>
                            确认修改
                       </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}
let mapStateToProps = state => {
    let { username, name } = state.user
    return {
        username,
        name
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchUpdateUser: params => dispatch(updateUser(params)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'updateUserModal' })(UpdateUserModal))
