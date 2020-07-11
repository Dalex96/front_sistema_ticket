import { SHOW_TYPE_USER } from "../actionTypes";

const initialState = {
	type: [],
}

export function  type_user (state = initialState, action){
	switch(action.type){
		case SHOW_TYPE_USER:
			return Object.assign({}, state, {type: action.payload})
		default: return state
	}
}

