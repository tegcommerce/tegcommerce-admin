import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ui, router } from '../redux';
import Header from '../components/Header';

class HeaderContainer extends Component {
  onChangeSearch = value => {
    const { onSearchChangeAction } = this.props;
    onSearchChangeAction(value);
  };

  onSearch = () => {
    console.log('dsds');
  };

  push = href => {
    const { pushAction } = this.props;
    pushAction(href);
  };

  render() {
    return (
      <Header
        pushFn={this.push}
        onChangeSearchFn={this.onChangeSearch}
        onSearchFn={this.onSearch}
      />
    );
  }
}

HeaderContainer.propTypes = {
  pushAction: PropTypes.func.isRequired,
  onSearchChangeAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  pushAction: router.actions.push,
  onSearchChangeAction: ui.actions.onChangeSearch,
};

export default connect(
  null,
  mapDispatchToProps,
)(HeaderContainer);
