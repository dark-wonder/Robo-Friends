import { CHANGE_SEARCH_FIELD } from './constants';

export const setSearchField = (text) => ({ //return inside, parenthesis without writing return keyord
	type: CHANGE_SEARCH_FIELD,
	payload: text
})