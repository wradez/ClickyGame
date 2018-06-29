import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GamePage from './Page/Page';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact to='/' component={GamePage} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
