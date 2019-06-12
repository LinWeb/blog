import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';
import { Link } from 'react-router-dom'

class TplOne extends Component {
    render() {
        let { data, total } = this.props;
        let articleList = data.map(({ id, title, createdAt }) => {
            let time = new Date(createdAt)
            let day = time.getDate()
            let month = time.getMonth() + 1
            let year = time.getFullYear()
            day = day < 10 ? '0' + day : day
            month = month < 10 ? '0' + month : month
            let date = month + '-' + day
            return {
                id, title, date, year
            }
        })
        let res = []
        let prevYear = 0
        articleList.forEach((item, index) => {
            let { year } = item
            if (index === 0) {
                res.push(year)
                prevYear = year
            } else {
                if (year !== prevYear) {
                    res.push(year)
                    prevYear = year
                }
            }
            res.push(item)
        })
        return (
            <Timeline className='tplOne'>
                <Timeline.Item>很棒，总共有 <span style={{ color: '#1890ff', fontSize: 18 }}>{total}</span> 篇文章了，继续加油！</Timeline.Item>
                {res.map((item, key) =>
                    Object.prototype.toString.call(item) === '[object Object]' ?
                        <Timeline.Item key={key}>{item.date} <Link className='title' to={'/article/' + item.id}>{item.title}</Link></Timeline.Item>
                        : <Timeline.Item key={key} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
                            {item}
                        </Timeline.Item>
                )}
            </Timeline>
        )
    }
}

export default TplOne