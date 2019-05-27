import React, { Component } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import { login } from '@/store/user/action'
import { connect } from 'react-redux'
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault()
        let { dispatchLogin, onCancel } = this.props
        const { validateFields } = this.props.form;
        validateFields((err, values) => {
            if (!err) {
                dispatchLogin(values).then(data => {
                    if (data) {
                        if (data.status) {
                            onCancel()
                        }
                    }
                })
            }
        })
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
                title="登录"
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
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="密码" hasFeedback>
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
                    <Form.Item {...submitLayout}>
                        <Button type="primary" htmlType="submit" style={{ width: '100%', float: 'right' }}>
                            登录
                       </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchLogin: params => dispatch(login(params))
})
export default connect(null, mapDispatchToProps)(Form.create({ name: 'register' })(Login))
