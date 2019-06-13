import React, { Component } from 'react';
import { Table } from 'antd';
import './index.scss'
import columns from './colums'

class ArticleList extends Component {
    onChange = (currentPage) => {
        let { getArticles } = this.props
        getArticles({ currentPage })
    }
    render() {
        let { data, pager } = this.props
        let { currentPage, pageSize, total } = pager
        return (
            <Table rowKey="id"
                bordered={true}
                className='article-list'
                columns={columns}  // 表格结构配置
                dataSource={data}  // 数据源
                pagination={{      // 分页器
                    current: currentPage,
                    pageSize,
                    total,
                    onChange: this.onChange
                }}
                locale={{
                    emptyText: '暂无数据'
                }}
            />
        )
    }
}

export default ArticleList