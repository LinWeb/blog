import React, { Component } from 'react';
import { Table, Tag, Divider, Badge } from 'antd';

import './index.scss'
class ArticleList extends Component {
    render() {
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
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </span>
                ),
            },
            {
                key: 'categories',
                title: '分类',
                dataIndex: 'categories',
                render: categories => (
                    <span>
                        {categories.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </span>
                ),
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
                render: text => <span>{text}</span>,
            },
            {
                key: 'updatedAt',
                title: '修改时间',
                dataIndex: 'updatedAt',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.age - b.age,
                render: text => <span>{text}</span>,
            },
            {
                key: 'id',
                title: '操作',
                dataIndex: 'id',
                render: (id) => (
                    <div>
                        <a href="javascript:;">{id}</a>
                        <Divider type="vertical" />
                        <a href="javascript:;">{id}</a>
                        <Divider type="vertical" />
                        <a href="javascript:;">{id}</a>
                    </div>
                ),
            }
        ]
        const data = [
            {
                key: '1',
                title: '文章标题',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
                categories: ['nice', 'developer'],
                commentTotal: 1,
                createdAt: '2-12',
                updatedAt: '2-12',
                id: 11
            },
        ]
        return (
            <Table className='article-list' columns={columns} dataSource={data} />
        )
    }
}

export default ArticleList