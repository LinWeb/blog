import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Logo extends Component {
    render() {
        return (
            <Link to="/">
                <div className='logo'>林大大的博客</div>
            </Link>
        )
    }
}

export default Logo