import React, { Component } from 'react';
import { Input } from 'antd';

class Search extends Component {
    render() {
        return (
            <div className='search'>
                <Input.Search
                    placeholder="搜索文章"
                    onSearch={value => console.log(value)}
                    style={{ width: '80%' }}
                />
            </div>
        )
    }
}

export default Search