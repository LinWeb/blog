import React, { Component } from 'react';
import './index.scss'
import { Input, Select, Button } from 'antd';
const { Option } = Select;

class ArticleFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            tagName: ''
            // 文章筛选器的开发
        }
    }
    changeKeyword = (e) => {
        let keyword = e.target.value
        this.setState(() => ({
            keyword
        }))
    }
    render() {
        let { keyword } = this.state
        return (
            <div className='article-filter'>
                <div className='item'>
                    标题：
                    <Input value={keyword} onChange={this.changeKeyword} placeholder="请输入文章的标题关键字" className='keyword' />
                </div>
                <div className='item'>
                    标签：<Select defaultValue="lucy" style={{ width: 120 }} >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                    </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <div className='item'>
                    分类：<Select defaultValue="lucy" style={{ width: 120 }} >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                    </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <div className='item'>
                    <Button type="primary">查找</Button>
                </div>
            </div>
        )
    }
}

export default ArticleFilter