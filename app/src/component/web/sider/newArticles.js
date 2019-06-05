import React, { Component } from 'react';
import { Divider } from 'antd';
import { connect } from 'react-redux'
import { getNewThreeArticles } from '@/store/article/action'
import { Link } from 'react-router-dom'
class NewArticles extends Component {
    UNSAFE_componentWillMount() {
        let { dispatchGetNewThreeArticles } = this.props
        dispatchGetNewThreeArticles()
    }
    render() {
        let { newThreeArticles, } = this.props;
        return (
            <div className='new-articles'>
                <Divider orientation="left">最近文章</Divider>
                <div className='articles'>
                    {newThreeArticles.map((item, key) => (
                        <Link to={'/article/' + item.id} className='item' key={key}>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => ({
    newThreeArticles: state.article.newThreeArticles
})
let mapDispatchToProps = dispatch => ({
    dispatchGetNewThreeArticles: () => dispatch(getNewThreeArticles())
})
export default connect(mapStateToProps, mapDispatchToProps)(NewArticles)