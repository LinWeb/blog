import React, { Component, Fragment } from 'react';
import { withRouter, Route } from 'react-router-dom'
import Web from './web'
import Admin from './admin'
import AdminLogin from '@/view/admin/login';

class Main extends Component {
    render() {
        let { pathname } = this.props.location
        let isAdminPath = false
        let isAdminLoginPath = false
        if (pathname.indexOf('/admin') !== -1) {
            isAdminPath = true
            if (pathname === '/admin/login') {
                isAdminLoginPath = true
            }
        }
        return (
            <Fragment>
                {isAdminPath ?
                    isAdminLoginPath ?
                        <Route path='/admin/login' component={AdminLogin} />
                        : <Admin />
                    : <Web />}
            </Fragment>
        )
    }
}

export default withRouter(Main);

