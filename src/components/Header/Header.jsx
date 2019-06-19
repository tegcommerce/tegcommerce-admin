import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';
import Style from './style/Header.scss';

class Header extends PureComponent {
  onSearch = e => {
    e.preventDefault();
    window.alert('cliquei na busca');
  };

  onChangeSearch = e => {
    console.log(e);
  };

  goToHome = e => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('/');
  };

  goToSignIn = e => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('/signin');
  };

  goToSignUp = e => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('/signup');
  };

  render() {
    const { onSearchFn, onChangeSearchFn } = this.props;
    return (
      <header className={Style.root}>
        <div className={Style.container}>
          <div className={Style.contentLeftContainer}>logo</div>
          <div className={Style.contentCenterContainer}>
            <SearchBar onSearchFn={onSearchFn} onChangeFn={onChangeSearchFn} />
          </div>
          <div className={Style.contentRightContainer}>card</div>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  onSearchFn: undefined,
  onChangeSearchFn: undefined,
};

Header.propTypes = {
  // required
  pushFn: PropTypes.func.isRequired,
  // optional
  onSearchFn: PropTypes.func,
  onChangeSearchFn: PropTypes.func,
};

export default Header;
