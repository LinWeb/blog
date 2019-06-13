import React from 'react';
import moment from 'moment'
import Operater from './operater'

const columns = [
    {
        key: 'username',
        title: '用户名',
        dataIndex: 'username',
        render: text => <span style={{ color: '#096dd9' }}>{text}</span>,
    },
    {
        key: 'createdAt',
        title: '注册时间',
        dataIndex: 'createdAt',
        defaultSortOrder: 'descend',
        sorter: (a, b) =>
            (new Date(a.createdAt)).getTime()
            - (new Date(b.createdAt)).getTime(),
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