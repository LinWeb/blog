import React, { Component, Fragment } from 'react';
import { Table, Tag, Divider, Badge } from 'antd';
import moment from 'moment'
import { Link } from 'react-router-dom'
import './index.scss'
import Tags from './tags'
import Categories from './categories'

const columns = [
    {
        key: 'title',
        title: '标题',
        dataIndex: 'title',
        render: text => <a href="javascript:;">{text}</a>,
    },
    {
        key: 'tags',
        title: '标签',
        dataIndex: 'tags',
        render: tags => (<Tags data={tags} />)
    },
    {
        key: 'categories',
        title: '分类',
        dataIndex: 'categories',
        render: categories => (<Categories data={categories} />)
    },
    {
        key: 'commentTotal',
        title: '评论数',
        dataIndex: 'commentTotal',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        render: text => <Badge count={text} />,
    },
    {
        key: 'createdAt',
        title: '创建时间',
        dataIndex: 'createdAt',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        render: text => <span>{moment(text).format('YYYY-MM-DD hh:mm:ss')}</span>,
    },
    {
        key: 'updatedAt',
        title: '修改时间',
        dataIndex: 'updatedAt',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        render: text => <span>{moment(text).format('YYYY-MM-DD hh:mm:ss')}</span>,
    },
    {
        key: 'id',
        title: '操作',
        dataIndex: 'id',
        render: (id) => (
            <Fragment>
                <Link to={'/article/' + id}>查看</Link>
                <Divider type="vertical" />
                <Link to={'/admin/article/edit/' + id}>编辑</Link>
                <Divider type="vertical" />
                <a href="javascript:;">删除</a>
            </Fragment>
        ),
    }
]


class ArticleList extends Component {
    render() {
        let { data } = this.props
        return (
            <Table rowKey="id" className='article-list' columns={columns} dataSource={data} />
        )
    }
}

export default ArticleList