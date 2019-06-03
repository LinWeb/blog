import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import Web from './web'
import Admin from './admin'

class Main extends Component {
    render() {
        let { pathname } = this.props.location
        let isAdminPath = false
        if (pathname.indexOf('/admin') !== -1) {
            isAdminPath = true
        }
        return (
            <Fragment>
                {isAdminPath ? <Admin /> : <Web />}
            </Fragment>
        )
    }
}

export default withRouter(Main);

