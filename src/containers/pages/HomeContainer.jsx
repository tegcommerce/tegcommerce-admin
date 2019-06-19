import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewContainer from '../ViewContainer';

class HomeContainer extends Component {
  render() {
    return <ViewContainer title="Home page" />;
  }
}

export default connect()(HomeContainer);
