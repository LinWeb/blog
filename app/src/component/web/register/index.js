import React, { Component } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import { register, checkUsername } from '@/store/user/action'
import { connect } from 'react-redux'

class Register extends Component {
    handleSubmit = e => {
        e.preventDefault()
        let { dispatchRegister, onCancel } = this.props
        const { validateFields } = this.props.form;
        validateFields((err, values) => {
            if (!err) {
                dispatchRegister(values).then(data => {
                    if (data) {
                        if (data.status) {
                            onCancel()
                            message.success('注册成功');
                        }
                    }
                })
            }
        })
    }
    checkUsername = () => {
        let { dispatchCheckUsername } = this.props
        const { getFieldValue, } = this.props.form;
        let username = getFieldValue('username')
        // dispatchCheckUsername({ username }).then(data => {
        //     if (data) {
        //         if (data.status) {
        //             message.success('不可用');
        //         }
        //     }
        // })

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
        let password = getFieldValue('password')
        if (!password || !value) {
            callback()
        } else {
            if (value !== password) {
                callback('两次密码输入不一致')
            }
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
        }; let { isShow, onCancel } = this.props
        const { getFieldDecorator } = this.props.form;
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
                            rules: [
                                {
                                    type: 'email',
                                    message: '请注意正确的电子邮箱格式',
                                },
                                {
                                    required: true,
                                    message: '请输入电子邮箱',
                                },
                            ],
                        })(<Input onBlur={this.checkUsername} />)}
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
                        <Button type="primary" htmlType="submit" style={{ width: '100%', float: 'right' }}>
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
export default connect(null, mapDispatchToProps)(Form.create({ name: 'register' })(Register))
