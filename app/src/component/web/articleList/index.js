import React, { Component } from 'react';
import { Divider, Icon, Tag } from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ArticleList extends Component {
    render() {
        let { data, tagColors, categoryColors } = this.props
        console.log(1111111111, this.props)
        return (<ul className='article-list'>
            {data.map((item, key) =>
                <Link to={'/article/id/' + item.id} key={key}>
                    <li className='item' >
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
                                <Link to={'/tag/' + tag.name} key={key}>
                                    <Tag color={tagColors[key % 11]}>{tag.name}</Tag>
                                </Link>
                            )}
                            <Divider type="vertical" />
                            <Icon type="bars" className='icon' />
                            {item.categories.map((category, key) =>
                                <Tag color={categoryColors[key % 11]} key={key}>{category.name}</Tag>
                            )}
                        </div>
                    </li> </Link>
            )}
        </ul>)
    }
}

let mapStateToProps = state => {
    let { tagColors } = state.tag
    let { categoryColors } = state.category

    return {
        tagColors, categoryColors
    }
}

export default connect(mapStateToProps)(ArticleList)