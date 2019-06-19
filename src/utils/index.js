import { Iterable, fromJS } from 'immutable';
import { createBrowserHistory } from 'history';

export const asImmutable = obj => (Iterable.isIterable(obj) ? obj : fromJS(obj));

export const emptyMap = asImmutable({});

export const getHistory = () => {
  window.browserHistory = window.browserHistory || createBrowserHistory();

  return window.browserHistory;
};

export const isDevEnv = () => {
  const nodeEnv = process.env.NODE_ENV;

  return nodeEnv !== 'production' && nodeEnv !== 'test';
};

export const debounce = (func, wait, immediate) => {
  let timeout;
  return function _debounce(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(this, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(this, args);
    }
  };
};
