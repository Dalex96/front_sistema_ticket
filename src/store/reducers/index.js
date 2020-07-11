import { combineReducers } from "redux";
import { show_tickets } from "./tickets";
import { login } from "./session";
import { type_user } from "./type";
import { show_user } from "./user";

export default combineReducers({ 
	ticket: show_tickets,
	login: login,
	register: login,
	type: type_user,
	user: show_user
});