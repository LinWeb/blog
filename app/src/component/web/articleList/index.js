import React, { Component } from 'react';
import { Divider, Icon, Tag } from 'antd';

class ArticleList extends Component {
    render() {
        let { data } = this.props
        return (<ul className='article-list'>
            {data.map((item, key) =>
                <li className='item' key={key} >
                    <Divider orientation="left">{item.title}</Divider>
                    <div className='content'>
                        {item.content}
                    </div>
                    <div className='footer'>
                        <Icon type="eye" className='icon' />{item.readCount}
                        <Divider type="vertical" />
                        <Icon type="message" className='icon' />{item.comments.length}
                        <Divider type="vertical" />
                        <Icon type="tags" className='icon' />
                        {item.tags.map((tag, key) =>
                            <Tag color="magenta" key={key}>{tag.name}</Tag>
                        )}
                        <Divider type="vertical" />
                        <Icon type="bars" className='icon' />
                        {item.categories.map((category, key) =>
                            <Tag color="#f50" key={key}>{category.name}</Tag>
                        )}
                    </div>
                </li>
            )}
        </ul>)
    }
}
export default ArticleList