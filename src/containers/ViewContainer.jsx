import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import View from '../components/View';
import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';

class ViewContainer extends PureComponent {
  render() {
    const { children, ...others } = this.props;
    return (
      <View header={<HeaderContainer />} footer={<FooterContainer />} {...others}>
        {children}
      </View>
    );
  }
}

ViewContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

ViewContainer.defaultProps = {
  children: undefined,
};

export default connect()(ViewContainer);
