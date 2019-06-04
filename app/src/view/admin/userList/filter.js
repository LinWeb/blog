import React, { Component } from 'react';
import { Input, Button } from 'antd';

class ArticleFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
        }
    }
    changeKeyword = (e) => {
        let keyword = e.target.value
        this.setState(() => ({
            keyword
        }))
    }
    submit = () => {
        let { getUsers } = this.props
        let { keyword } = this.state
        getUsers({ keyword })
    }
    render() {
        let { keyword } = this.state
        return (
            <div className='article-filter'>
                <div className='item'>
                    用户名：
                    <Input value={keyword} onChange={this.changeKeyword} placeholder="请输入用户名关键字" className='keyword' />
                </div>
                <div className='item'>
                    <Button type="primary" onClick={this.submit}>查找</Button>
                </div>
            </div>
        )
    }
}

export default ArticleFilter