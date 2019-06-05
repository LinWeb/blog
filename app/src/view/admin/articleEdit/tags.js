import React, { Component, Fragment } from 'react';
import { Input, Tag, Icon } from 'antd';
import { connect } from 'react-redux'
const { CheckableTag } = Tag

class Tags extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            newTagList: []
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
            newTagList: [...prevState.newTagList, { name }]
        }))
    }
    handleClose = (name) => {
        let { onChange } = this.props
        let { newTagList } = this.state
        onChange(name)
        let data = newTagList.filter(item => item !== name)
        this.setState(() => ({
            show: false,
            newTagList: data
        }))
    }
    render() {
        let { tagList, tags, onChange } = this.props
        let { show, newTagList } = this.state
        return (
            <Fragment>
                {tagList.map((category, key) => {
                    return (
                        <CheckableTag
                            checked={tags.includes(category.name)}
                            onChange={() => { onChange(category.name) }}
                            className='category'
                            key={key}>
                            {category.name}
                        </CheckableTag>
                    );
                })}
                {newTagList.map((category, key) => {
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
                        <Icon type="plus" /> 添加标签
                        </Tag>
                )}
            </Fragment>
        )
    }
}
let mapStateToProps = state => {
    let { tagList } = state.tag
    return {
        tagList
    }
}
export default connect(mapStateToProps)(Tags)

