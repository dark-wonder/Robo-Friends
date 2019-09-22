import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = { //initialState is an object
	searchField: '' //empty string
}

//reducer to create state
//Search robots using the searchfield
//actions are objects that we are returning
//searchRobots should be a pure function that returns an output that is a new state without modifications
export const searchRobots = (state = initialState,action = {}) => {
	switch(action.type){ //we use type in actions.js file
		case CHANGE_SEARCH_FIELD:
			return {...state, searchfield: action.payload };
			//using spread operator or
			/*Object.assign({}, state, {searchfield: action.payload})*/ 
			//returning a new state and update serachfiled acitivity with action payload property
		default: 
			return state;
	}
}