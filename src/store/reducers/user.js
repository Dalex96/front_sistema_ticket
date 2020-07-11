import { CREATE_USER, SHOW_USER_EMAIL, SHOW_USERS } from "../actionTypes";

const initialState = {
	users: [],
	newusers: [],
	userEmail: [],
}

export function  show_user(state = initialState, action){
	switch(action.type){
		case CREATE_USER:
			return Object.assign({}, state, {newusers: action.payload})
		case SHOW_USER_EMAIL:
			return Object.assign({}, state, {userEmail: action.payload})
		case SHOW_USERS:
			return Object.assign({}, state, {users: action.payload})
		default: return state
	}
}

