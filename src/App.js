import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import Home from "./pages/Home";
import { withRouter } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
}

  render() {

    return (
      <div className="App">
      <header className="App-header">
      </header>
      <div>
      <Route exact path="/" component={Home} />
      </div>
    </div>
    );
  }
}


export default withRouter(connect()(App));