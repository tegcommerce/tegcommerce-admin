import MODULE_NAME from './uiConstants';

export const SEARCH_CHANGED = `${MODULE_NAME}/SEARCH_CHANGED`;

export const onChangeSearch = value => ({
  type: SEARCH_CHANGED,
  payload: {
    value,
  },
});
