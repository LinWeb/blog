import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Main from './main'

class App extends Component {
  render() {
    return (
      <Router>
        <Main />
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
