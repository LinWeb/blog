import React, { Component, Fragment } from 'react';
import { Tag } from 'antd';
import { connect } from 'react-redux'

class Tags extends Component {
    render() {
        let { data, tagColors } = this.props
        return (
            <Fragment>
                {data.map((tag, key) => {
                    return (
                        <Tag className='tag' color={tagColors[key % 11]} key={key} >
                            {tag.name}
                        </Tag>
                    );
                })}
            </Fragment>
        )
    }
}
let mapStateToProps = state => {
    let { tagColors } = state.tag
    return {
        tagColors
    }
}
export default connect(mapStateToProps)(Tags)

