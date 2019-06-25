import React, { Component } from 'react'

export default function Bundle(getComponent) {
    return class AsyncComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                Com: null
            }
        }
        async  UNSAFE_componentWillMount() {
            const Com = await getComponent()
            this.setState(() => ({
                Com: Com.default
            }))
        }
        render() {
            let { Com } = this.state
            return Com ? <Com {...this.props} /> : null
        }
    }
}