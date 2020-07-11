import { LOGIN, REGISTER, LOGOUT_USERS } from "../actionTypes";

const initialState = {
	login: [],
	register: [],
	logout: []
}

export function  login(state = initialState, action){
	switch(action.type){
		case LOGIN:
			return Object.assign({}, state, {login: action.payload})		
		case REGISTER:
			return Object.assign({}, state, {register: action.payload})
		case LOGOUT_USERS:
			return Object.assign({}, state, {logout: action.payload})
		default: return state
	}
}
