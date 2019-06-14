import React, { Component } from 'react';
import { Button, Form, Input, Icon } from 'antd';
import { login } from '@/store/user/action'
import { connect } from 'react-redux'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        let { dispatchLogin, succeedCallback, type } = this.props
        const { validateFields } = this.props.form;
        validateFields((err, values) => {
            if (!err) {
                this.setState(() => ({
                    loading: true
                }))
                dispatchLogin({ ...values, type }).then(data => {
                    if (data) {
                        if (data.status) {
                            succeedCallback()
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
        const { getFieldDecorator } = this.props.form;
        let { loading } = this.state
        return (
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
                        placeholder="请输入电子邮箱" />)}
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
                        placeholder="请输入密码" />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" loading={loading} htmlType="submit" style={{ width: '100%', float: 'right' }}>
                        登录
                       </Button>
                </Form.Item>
            </Form>
        )
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchLogin: params => dispatch(login(params))
})
export default connect(null, mapDispatchToProps)(Form.create({ name: 'login-form' })(LoginForm))
