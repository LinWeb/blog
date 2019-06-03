import React, { Component, Fragment } from 'react';
import { Tag } from 'antd';
import { connect } from 'react-redux'

class Categories extends Component {
    render() {
        let { data, categoryColors } = this.props
        return (
            <Fragment>
                {data.map((tag, key) => {
                    return (
                        <Tag className='category' color={categoryColors[key % 11]} key={key} >
                            {tag.name}
                        </Tag>
                    );
                })}
            </Fragment>
        )
    }
}
let mapStateToProps = state => {
    let { categoryColors } = state.category
    return {
        categoryColors
    }
}
export default connect(mapStateToProps)(Categories)

