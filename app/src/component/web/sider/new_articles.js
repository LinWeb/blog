import React, { Component } from 'react';
import { Divider } from 'antd';
class NewArticles extends Component {
    render() {
        return (
            <div className='new-articles'>
                <Divider orientation="left">最近文章</Divider>
                <ul className='articles'>
                    <li className='item'>文章1</li>
                    <li className='item'>文章2</li>
                    <li className='item'>文章3</li>
                </ul>
            </div>
        )
    }
}

export default NewArticles