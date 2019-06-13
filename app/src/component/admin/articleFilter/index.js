import React, { Component } from 'react';
import './index.scss'
import { Input, Select, Button } from 'antd';
import { connect } from 'react-redux'
import { getTagList } from '@/store/tag/action'
import { getCategoryList } from '@/store/category/action'
import { getArticleList, } from '@/store/article/action'
const { Option } = Select;

class ArticleFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',  // 标题关键词
            tagName: '',  // 标签
            categoryName: ''  // 分类
        }
    }
    changeKeyword = (e) => {
        let keyword = e.target.value
        this.setState(() => ({
            keyword
        }))
    }
    changeTag = (tagName) => {
        this.setState(() => ({
            tagName
        }))
    }
    changeCategory = (categoryName) => {
        this.setState(() => ({
            categoryName
        }))
    }
    submit = () => {
        let { getArticles } = this.props
        let { keyword, tagName, categoryName } = this.state
        getArticles({ keyword, tagName, categoryName, })
    }
    UNSAFE_componentWillMount() {
        let { dispatchGetTagList, dispatchGetCategoryList } = this.props
        dispatchGetTagList()  // 获取标签列表
        dispatchGetCategoryList()  // 获取分类列表
    }
    render() {
        let { keyword, tagName, categoryName } = this.state
        let { tagList, categoryList } = this.props
        return (
            <div className='article-filter'>
                <div className='item'>
                    标题：
                    <Input value={keyword} onChange={this.changeKeyword} placeholder="请输入文章的标题关键字" className='keyword' />
                </div>
                <div className='item'>
                    标签：
                    <Select value={tagName} style={{ width: 120 }} onChange={this.changeTag}>
                        {tagList.map((tag, key) => (
                            <Option value={tag.name} key={key}>{tag.name}</Option>
                        ))}
                    </Select>
                </div>
                <div className='item'>
                    分类：
                    <Select value={categoryName} style={{ width: 120 }} onChange={this.changeCategory}>
                        {categoryList.map((category, key) => (
                            <Option value={category.name} key={key}>{category.name}</Option>
                        ))}
                    </Select>
                </div>
                <div className='item'>
                    <Button type="primary" onClick={this.submit}>查找</Button>
                </div>
            </div>
        )
    }
}
let mapStateToProps = state => {
    let { tagList } = state.tag
    let { categoryList } = state.category
    return {
        tagList, categoryList
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetTagList: () => dispatch(getTagList()),
    dispatchGetCategoryList: () => dispatch(getCategoryList()),
    dispatchGetArticleList: params => dispatch(getArticleList(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFilter)