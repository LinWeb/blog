import React, { Component } from 'react';
import { Modal, } from 'antd';
import LoginForm from '@/component/common/loginForm'

class LoginModal extends Component {
    render() {
        let { isShow, onCancel } = this.props
        return (
            <Modal
                title="登录"
                visible={isShow}
                onCancel={onCancel}
                width={334}
                footer={null}
            >
                <LoginForm succeedCallback={onCancel} />
            </Modal>
        )
    }
}
export default LoginModal
