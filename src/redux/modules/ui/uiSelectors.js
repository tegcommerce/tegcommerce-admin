import MODULE_NAME from './uiConstants';

export const getSearch = state => state.getIn([MODULE_NAME, 'search'], '');
