import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Style from './style/Button.scss';

class Button extends PureComponent {
  render() {
    const { href, variant, onClick, children } = this.props;

    return (
      <Fragment>
        {href ? (
          <a href={href} onClick={onClick}>
            {children}
          </a>
        ) : (
          <button className={`${Style.base} ${Style[variant]}`} type="button" onClick={onClick}>
            {children}
          </button>
        )}
      </Fragment>
    );
  }
}

Button.defaultProps = {
  href: undefined,
  variant: 'default',
  children: undefined,
  onClick: undefined,
};

Button.propTypes = {
  // optional
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  variant: PropTypes.oneOfType(['default', 'success']),
  onClick: PropTypes.func,
};

export default Button;
