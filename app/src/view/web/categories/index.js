import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCategoryList } from '@/store/category/action'
import { Tag, Badge } from 'antd';
import './index.scss'
import { Link } from 'react-router-dom'

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
                <div className='total'>总共 <span>{categoryList.length}</span> 个分类</div>
                <div className='categories'>
                    {categoryList.map((category, key) => (
                        <Link to={{ pathname: '/category/' + category.name, state: { type: 'Category', categoryName: category.name } }} key={key}>
                            <span className='item'>
                                <Badge count={category.articleCount} style={{ backgroundColor: '#fff', color: 'red', borderColor: 'red' }} >
                                    <Tag color={categoryColors[key % 11]} style={{ cursor: 'pointer' }}>{category.name}</Tag>
                                </Badge>
                            </span>
                        </Link>
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