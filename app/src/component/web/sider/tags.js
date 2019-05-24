import React, { Component } from 'react';
import { Divider, Tag } from 'antd';
import { connect } from 'react-redux'
import { getTagList } from '@/store/tag/action'

class Tags extends Component {
    UNSAFE_componentWillMount() {
        let { dispatchGetTagList } = this.props
        dispatchGetTagList()
    }
    render() {
        let { tagList, tagColors } = this.props
        return (
            <div className='tags-container'>
                <Divider orientation="left">标签</Divider>
                <div className='tags'>
                    {tagList.map((item, key) => (
                        <Tag color={tagColors[key % 11]} key={key}>{item.name}</Tag>
                    ))}
                </div>
            </div>
        )
    }
}
let mapStateToProps = state => {
    let { tagList, tagColors } = state.tag
    return {
        tagList,
        tagColors
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetTagList: () => dispatch(getTagList())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tags)