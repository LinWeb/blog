import React from 'react';
import { Badge } from 'antd';
import moment from 'moment'
import Tags from './tags'
import Categories from './categories'
import Operater from './operater'
const columns = [
    {
        key: 'title',
        title: '标题',
        dataIndex: 'title',
        render: text => <span style={{ color: '#096dd9' }}>{text}</span>,
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
        key: 'comments',
        title: '评论数',
        dataIndex: 'comments',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.comments.length - b.comments.length,
        render: text => <Badge count={text.length} />,
    },
    {
        key: 'readCount',
        title: '阅读数',
        dataIndex: 'readCount',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.readCount - b.readCount,
        render: text => <Badge count={text} />,
    },
    {
        key: 'createdAt',
        title: '创建时间',
        dataIndex: 'createdAt',
        defaultSortOrder: 'descend',
        sorter: (a, b) =>
            (new Date(a.createdAt)).getTime()
            - (new Date(b.createdAt)).getTime(),
        render: text => <span>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
        key: 'updatedAt',
        title: '修改时间',
        dataIndex: 'updatedAt',
        defaultSortOrder: 'descend',
        sorter: (a, b) =>
            (new Date(a.updatedAt)).getTime()
            - (new Date(b.updatedAt)).getTime(),
        render: text => <span>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
        key: 'id',
        title: '操作',
        dataIndex: 'id',
        render: (id) => <Operater id={id} />,
    }
]

export default columns