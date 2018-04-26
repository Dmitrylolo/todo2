import { combineReducers } from 'redux';

const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE';
export const ADD_POST = 'ADD_POST';

const INITIAL_STATE = [ 
{ name: 'one' }, 
{ name: 'two' }
];

export const reddit = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return state;
		case FETCH_POSTS_COMPLETE:
			return action.payload;
		case ADD_POST:
			return [
			...state, 
			action.payload
			];
		default:
			return state;
	}
};

export const reducer = combineReducers({ reddit });
