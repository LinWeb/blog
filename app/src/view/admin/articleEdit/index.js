
import React, { Component } from 'react';
import { Form, Input, Button, Tag } from 'antd';
import { connect } from 'react-redux'
import { getTagList } from '@/store/tag/action'
import { getCategoryList } from '@/store/category/action'
import Categories from './categories'
import Tags from './tags'
class ArticleEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            tags: []
        }
    }
    changeCategories = (name) => {
        this.setState((prevState) => {
            if (prevState.categories.includes(name)) {
                let newCategories = prevState.categories.filter(item => item !== name)
                return {
                    categories: newCategories
                }
            } else {
                return {
                    categories: [...prevState.categories, name]
                }
            }
        })
    }
    changeTags = (name) => {
        this.setState((prevState) => {
            if (prevState.tags.includes(name)) {
                let newTags = prevState.tags.filter(item => item !== name)
                return {
                    tags: newTags
                }
            } else {
                return {
                    tags: [...prevState.tags, name]
                }
            }
        })
    }
    UNSAFE_componentWillMount() {
        let { dispatchGetTagList, dispatchGetCategoryList } = this.props
        dispatchGetTagList()
        dispatchGetCategoryList()
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        let { categories, tags } = this.state
        // console.log(1111111, tags)
        return (
            <Form labelCol={{ span: 3 }} wrapperCol={{ span: 20 }} onSubmit={this.handleSubmit}>
                <Form.Item label="标题">
                    {getFieldDecorator('title', {
                        rules: [{
                            required: true,
                            message: '请输入标题'
                        }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="分类">
                    <Categories categories={categories} onChange={this.changeCategories} />
                </Form.Item>
                <Form.Item label="标签">
                    <Tags tags={tags} onChange={this.changeTags} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

let mapStateToProps = state => {
    return {
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetTagList: () => dispatch(getTagList()),
    dispatchGetCategoryList: () => dispatch(getCategoryList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'article-edit' })(ArticleEdit))