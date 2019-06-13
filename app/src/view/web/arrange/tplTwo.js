import React, { Component } from 'react';
import { Timeline } from 'antd';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom'

class TplOne extends Component {
    render() {
        let { data, location } = this.props;
        let state = location.state || {}
        let { type, tagName, categoryName } = state;
        return (
            <Timeline className='tplTwo'>
                <Timeline.Item style={{ padding: '0px 0 40px' }}>
                    <span className='name'>{tagName || categoryName}</span>
                    <span className='type'>{type}</span>
                </Timeline.Item>
                {data.map((item, key) =>
                    <Timeline.Item key={key}>{item.date} <Link className='title' to={'/article/' + item.id}>{item.title}</Link></Timeline.Item>
                )}
            </Timeline>
        )
    }
}

export default withRouter(TplOne)