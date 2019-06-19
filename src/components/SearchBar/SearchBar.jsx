import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounce } from '../../utils';

import Button from '../Button';
import Style from './style/SearchBar.scss';

class SearchBar extends Component {
  debouncedOnchange = debounce(value => {
    const { onChangeFn } = this.props;
    if (onChangeFn) {
      onChangeFn(value);
    }
  }, 300);

  handleOnChange = event => {
    this.debouncedOnchange(event.target.value);
  };

  render() {
    const { onSearchFn } = this.props;
    return (
      <div className={Style.root}>
        <div className={Style.container}>
          <div className={Style.iconContainer}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className={Style.inputContainer}>
            <input className={Style.input} type="text" onChange={this.handleOnChange} />
          </div>
          <div className={Style.buttonContainer}>
            <Button variant="success" onClick={onSearchFn}>
              Search
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  onSearchFn: undefined,
  onChangeFn: undefined,
};

SearchBar.propTypes = {
  // optional
  onSearchFn: PropTypes.func,
  onChangeFn: PropTypes.func,
};

export default SearchBar;
