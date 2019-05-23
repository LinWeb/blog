import React, { Component } from 'react';
import './index.scss'
import BloggerInfor from './bloggerInfor'
import NewArticles from './newArticles'
import Tags from './tags'
class Sider extends Component {

    render() {
        return (
            <div className='sider-container'>
                <div className='sider-roll'>
                    <BloggerInfor />
                    <NewArticles />
                    <Tags />
                </div>
            </div>
        )
    }
}

export default Sider