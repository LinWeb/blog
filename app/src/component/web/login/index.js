import React, { Component } from 'react';
import { Modal, Button, Form, Input, Icon } from 'antd';
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
        let { isShow, onCancel } = this.props
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                title="登录"
                visible={isShow}
                onCancel={onCancel}
                width={334}
                footer={null} >
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入电子邮箱',
                                },
                            ],
                        })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username" />)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入密码',
                                },
                            ],
                        })(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password" />)}
                    </Form.Item>
                    <Form.Item>
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
