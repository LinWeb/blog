import React, { Component } from 'react';
import { Divider } from 'antd';
import { connect } from 'react-redux'
class NewArticles extends Component {
    render() {
        let { newThreeArticles } = this.props;
        return (
            <div className='new-articles'>
                <Divider orientation="left">最近文章</Divider>
                <ul className='articles'>
                    {newThreeArticles.map((item, key) => (
                        <li className='item' key={key}>{item.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

let mapStateToProps = state => ({
    newThreeArticles: state.article.newThreeArticles
})

export default connect(mapStateToProps)(NewArticles)