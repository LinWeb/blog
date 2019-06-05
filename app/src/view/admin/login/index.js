import React, { Component } from 'react';
import LoginForm from '@/component/common/loginForm'
import './index.scss'
import { Link } from 'react-router-dom'

class Login extends Component {
    succeedCallback = () => {
        let { history } = this.props
        history.push('/admin')
    }
    render() {
        return (
            <div className='admin-login-container'>
                <h1 className='title'>管理员登录</h1>
                <LoginForm type='admin' succeedCallback={this.succeedCallback} />
                <div className='footer'>
                    <Link to='/' style={{ float: 'right' }}>返回主页 ></Link>
                </div>
            </div>
        )
    }
}

export default Login
