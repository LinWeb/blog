import React, { Component } from 'react';
import { Divider, Tag } from 'antd';
import { connect } from 'react-redux'
import { getTagList } from '@/store/tag/action'
import { Link } from 'react-router-dom'

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
                    {tagList.map((tag, key) => (
                        <Link to={{ pathname: '/tag/' + tag.name, state: { type: 'Tag', tagName: tag.name } }} key={key}>
                            <Tag color={tagColors[key % 11]}>{tag.name}</Tag>
                        </Link>
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