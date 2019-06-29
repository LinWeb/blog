import React, { Component } from 'react';
import { Avatar, Row, Col, Icon } from 'antd';
import img from '@/assets/images/bloger-head.jpg'
class BloggerInfor extends Component {
    render() {
        return (
            <div className='blogger-infor'>
                <Avatar size={110} src={img} />
                <h2 className='name'>林大大</h2>
                <p className='introduction' >前端打杂人员</p>
                <Row>
                    <Col span={24}>
                        <a href='https://github.com/LinWeb' rel="noopener noreferrer" target='_blank' style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                            <Icon type="github" /> github
                        </a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BloggerInfor