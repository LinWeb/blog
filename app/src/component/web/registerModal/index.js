import React, { Component } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import { register, checkUsername } from '@/store/user/action'
import { connect } from 'react-redux'

class RegisterModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        let { dispatchRegister, onCancel } = this.props
        const { validateFields } = this.props.form;
        validateFields((err, values) => {
            if (!err) {
                this.setState(() => ({
                    loading: true
                }))
                dispatchRegister(values).then(data => {
                    if (data) {
                        if (data.status) {
                            onCancel()
                            message.success('注册成功');
                        }
                    }
                    this.setState(() => ({
                        loading: false
                    }))
                })
            }
        })
    }
    checkUsername = (rule, value, callback) => {
        let { dispatchCheckUsername } = this.props
        dispatchCheckUsername({ username: value }).then(data => {
            if (data) {
                if (data.status) {
                    callback();
                } else {
                    callback(data.message);
                }
            }
        })
    }
    compareToNextPassword = (rule, value, callback) => {
        const { getFieldValue, validateFields } = this.props.form;
        let confirmPassword = getFieldValue('confirmPassword')
        if (confirmPassword && value) {
            validateFields(['confirmPassword'], (errors, values) => { });
        }
        callback()

    }
    compareToFirstPassword = (rule, value, callback) => {
        const { getFieldValue } = this.props.form;
        let password = getFieldValue('password')
        if (password && value && value !== password) {
            callback('两次密码输入不一致')
        } else {
            callback()
        }
    }
    render() {
        const formItemLayout = {
            labelCol: { span: 6, offset: 0 },
            wrapperCol: { span: 17, offset: 0 },
        };
        const submitLayout = {
            wrapperCol: { span: 23, offset: 0 },
        };
        let { isShow, onCancel } = this.props
        const { getFieldDecorator } = this.props.form;
        let { loading } = this.state
        return (
            <Modal
                title="注册"
                visible={isShow}
                onCancel={onCancel}
                width={434}
                footer={null} >
                <Form onSubmit={this.handleSubmit}  {...formItemLayout} className="login-form">
                    <Form.Item label="用户邮箱">
                        {getFieldDecorator('username', {
                            validateTrigger: 'onBlur',
                            rules: [
                                {
                                    type: 'email',
                                    message: '请注意正确的电子邮箱格式',
                                },
                                {
                                    required: true,
                                    message: '请输入电子邮箱',
                                },
                                {
                                    validator: this.checkUsername,
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="用户昵称">
                        {getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入用户昵称',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="新密码" hasFeedback>
                        {getFieldDecorator('password', {
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
                    <Form.Item {...submitLayout}>
                        <Button type="primary" loading={loading} htmlType="submit" style={{ width: '100%', float: 'right' }}>
                            注册
                       </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchRegister: params => dispatch(register(params)),
    dispatchCheckUsername: params => dispatch(checkUsername(params))
})
export default connect(null, mapDispatchToProps)(Form.create({ name: 'register' })(RegisterModal))
