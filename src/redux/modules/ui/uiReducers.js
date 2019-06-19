import { asImmutable } from '../../../utils';
import * as actions from './uiActions';

const initialState = asImmutable({
  sidebarIsOpen: false,
  search: '',
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_CHANGED:
      return state.set('search', action.payload.value);
    default:
      return state;
  }
};
