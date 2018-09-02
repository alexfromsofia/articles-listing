import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticlesContainer from './Articles';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ArticlesContainer />
      </div>
    );
  }
}

export default connect()(App);
