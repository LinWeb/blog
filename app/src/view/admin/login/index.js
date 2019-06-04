import React, { Component } from 'react';
import LoginForm from '@/component/common/loginForm'
import './index.scss'
class Login extends Component {
    succeedCallback = () => {
        let { history } = this.props
        history.push('/admin')
    }
    render() {
        return (
            <div className='admin-login-container'>
                <h1 className='title'>管理员登录</h1>
                <LoginForm succeedCallback={this.succeedCallback} />
            </div>
        )
    }
}

export default Login
