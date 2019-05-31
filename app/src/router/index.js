import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Web from './web'
import Admin from './admin'

class App extends Component {
  render() {
    let { pathname } = window.location
    let isAdminPath = false
    if (pathname.indexOf('/admin')) {
      isAdminPath = true
    }
    return (
      <Router>
        {isAdminPath ?
          <Web></Web>
          : <Admin></Admin>}
      </Router>
    );
  }
}

let mapStateToProps = state => {
  let { loading } = state.common
  return {
    loading
  }
}
export default connect(mapStateToProps)(App);
