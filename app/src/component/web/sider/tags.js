import React, { Component } from 'react';
import { Divider, Tag } from 'antd';
class Tags extends Component {
    render() {
        return (
            <div className='tags-container'>
                <Divider orientation="left">标签</Divider>
                <div className='tags'>
                    <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="geekblue">geekblue</Tag>
                    <Tag color="purple">purple</Tag></div>
            </div>
        )
    }
}

export default Tags