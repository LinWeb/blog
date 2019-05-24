import React, { Component } from 'react';
import { Timeline } from 'antd';
import { withRouter } from "react-router";
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
                    <Timeline.Item key={key}>{item.date} <span className='title'>{item.title}</span></Timeline.Item>
                )}
            </Timeline>
        )
    }
}

export default withRouter(TplOne)