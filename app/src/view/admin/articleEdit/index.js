
import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { connect } from 'react-redux'
import { getTagList } from '@/store/tag/action'
import { getCategoryList } from '@/store/category/action'
import { addArticle, updateArticle, getArticleDetail } from '@/store/article/action'
import Categories from './categories'
import Tags from './tags'
import MdEditor from 'react-markdown-editor-lite'

class ArticleEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            title: '',
            categories: [],
            tags: [],
            content: ''
        }
    }
    changeTitle = (e) => {
        let title = e.target.value
        this.setState(() => ({
            title
        }))
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
    handleEditorChange = ({ text, html }) => {
        this.setState(() => ({
            content: text
        }))
    }
    UNSAFE_componentWillMount() {
        let { dispatchGetTagList, dispatchGetCategoryList } = this.props
        dispatchGetTagList()
        dispatchGetCategoryList()

        let { pathname } = this.props.location
        if (pathname !== '/admin/article/add') {
            let arr = pathname.split('/')
            let id = arr[arr.length - 1]
            this.setState(() => ({
                id: id
            }))
            id && this.props.dispatchGetArticleDetail({ id }).then(data => {
                if (data) {
                    if (data.status) {
                        let { title, categories, tags, content } = data.response
                        categories = categories.map(item => item.name)
                        tags = tags.map(item => item.name)
                        this.setState(() => ({
                            title, categories, tags, content
                        }))
                    }
                }
            })
        }

    }
    handleSubmit = async (e, exit) => {
        e.preventDefault()
        let { id, title, categories, tags, content } = this.state
        let { dispatchAddArticle, dispatchUpdateArticle, history } = this.props
        if (title === '') {
            message.error('请输入标题')
            return;
        }
        if (!categories.length) {
            message.error('至少选择一个分类')
            return;
        }
        if (!tags.length) {
            message.error('至少选择一个标签')
            return;
        }
        if (content === '') {
            message.error('请输入内容')
            return;
        }
        let res = null
        if (id) {
            res = await dispatchUpdateArticle({ id, title, categories, tags, content })
        } else {
            res = await dispatchAddArticle({ title, categories, tags, content })
        }
        if (res.status) {
            message.success(res.message)
            exit && history.push('/admin')
        }
    }
    render() {
        let { title, categories, tags, content } = this.state
        return (
            <Form labelCol={{ span: 2 }} wrapperCol={{ span: 20 }} style={{ padding: '22px 0 45px' }}>
                <Form.Item label="标题">
                    <Input value={title} onChange={this.changeTitle} />
                </Form.Item>
                <Form.Item label="分类">
                    <Categories categories={categories} onChange={this.changeCategories} />
                </Form.Item>
                <Form.Item label="标签">
                    <Tags tags={tags} onChange={this.changeTags} />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 22, offset: 1 }}>
                    <MdEditor
                        value={content}
                        onChange={this.handleEditorChange}
                        style={{ width: '100%', height: '600px' }}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 14, offset: 1 }}>
                    <Button type="primary" htmlType="submit" onClick={(e) => { this.handleSubmit(e, true) }}>
                        提交
                    </Button>
                    <Button type="primary" style={{ marginLeft: 18 }} htmlType="submit" onClick={(e) => { this.handleSubmit(e, false) }}>
                        保存并继续编辑
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

let mapDispatchToProps = dispatch => ({
    dispatchGetTagList: () => dispatch(getTagList()),
    dispatchGetCategoryList: () => dispatch(getCategoryList()),
    dispatchAddArticle: (params) => dispatch(addArticle(params)),
    dispatchUpdateArticle: (params) => dispatch(updateArticle(params)),
    dispatchGetArticleDetail: params => dispatch(getArticleDetail(params))
})

export default connect(null, mapDispatchToProps)(Form.create({ name: 'article-edit' })(ArticleEdit))