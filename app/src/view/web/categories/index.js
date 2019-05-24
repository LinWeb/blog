import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCategoryList } from '@/store/category/action'
import { Tag, Badge } from 'antd';
import './index.scss'

class Categories extends Component {
    UNSAFE_componentWillMount() {
        let { dispatchGetCategoryList } = this.props
        dispatchGetCategoryList()
    }
    render() {
        let { categoryList, categoryColors } = this.props
        return (
            <div className='categories-container'>
                <h1 className='title'>分类</h1>
                <div className='total'>总共<sapn>1</sapn>个分类</div>
                <div className='categories'>
                    {categoryList.map((item, key) => (
                        <span className='item' key={key}>
                            <Badge count={12} style={{ backgroundColor: '#fff', color: 'red', borderColor: 'red' }} >
                                <Tag color={categoryColors[key % 11]}>{item.name}</Tag>
                            </Badge>
                        </span>
                    ))}
                </div>
            </div>
        )
    }
}
let mapStateToProps = state => {
    let { categoryList, categoryColors } = state.category
    return {
        categoryList,
        categoryColors
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetCategoryList: () => dispatch(getCategoryList())
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)