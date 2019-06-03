import React, { Component, Fragment } from 'react';
import { Input, Tag, Icon } from 'antd';
import { connect } from 'react-redux'
const { CheckableTag } = Tag

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            newCategoryList: []
        }
    }
    changeShowInput = (show) => {
        this.setState(() => ({
            show
        }))
    }
    showInput = () => {
        this.setState(() => ({
            show: true
        }))
    }
    handleInputConfirm = (e) => {
        let name = e.target.value
        this.props.onChange(name)
        this.setState((prevState) => ({
            show: false,
            newCategoryList: [...prevState.newCategoryList, { name }]
        }))
    }
    handleClose = (name) => {
        let { onChange } = this.props
        let { newCategoryList } = this.state
        onChange(name)
        let data = newCategoryList.filter(item => item !== name)
        this.setState(() => ({
            show: false,
            newCategoryList: data
        }))
    }
    render() {
        let { categoryList, categories, onChange } = this.props
        let { show, newCategoryList } = this.state
        return (
            <Fragment>
                {categoryList.map((category, key) => {
                    return (
                        <CheckableTag
                            checked={categories.includes(category.name)}
                            onChange={() => { onChange(category.name) }}
                            className='category'
                            key={key}>
                            {category.name}
                        </CheckableTag>
                    );
                })}
                {newCategoryList.map((category, key) => {
                    return (
                        <Tag closable="true"
                            onClose={() => this.handleClose(category.name)}
                            className='category'
                            key={key}
                            color={'#1890ff'} >
                            {category.name}
                        </Tag>
                    );
                })}
                {show && (
                    <Input
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        onBlur={this.handleInputConfirm}
                    />
                )}
                {!show && (
                    <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                        <Icon type="plus" /> 添加分类
                        </Tag>
                )}
            </Fragment>
        )
    }
}
let mapStateToProps = state => {
    let { categoryList } = state.category
    return {
        categoryList
    }
}
export default connect(mapStateToProps)(Categories)

