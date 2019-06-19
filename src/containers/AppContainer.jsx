import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { getHistory } from '../utils';
import HomeContainer from './pages/HomeContainer';
import SignInContainer from './pages/SignInContainer';
import SignUpContainer from './pages/SignUpContainer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={getHistory()}>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/signin" component={SignInContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
