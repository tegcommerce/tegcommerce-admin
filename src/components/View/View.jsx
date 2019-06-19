import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Style from './style/View.scss';

class View extends PureComponent {
  render() {
    const { title, subtitle, header, footer, children } = this.props;

    return (
      <div className={Style.root}>
        <div className={Style.container}>
          <div>
            <div className={Style.headerContainer}>{header}</div>
            <main className={Style.mainContainer}>
              <h2 className={Style.viewTitle}>{title}</h2>
              {subtitle && <div className={Style.subtitleContainer}>{subtitle}</div>}
              {children}
            </main>
            <div className={Style.footerContainer}>{footer}</div>
          </div>
        </div>
      </div>
    );
  }
}

View.defaultProps = {
  subtitle: '',
  children: undefined,
};

View.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default View;
