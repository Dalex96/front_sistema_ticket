import { 
	SHOW_TICKETS,
 	SHOW_TICKETS_USER,
 	NEW_TICKET,
 	UPDATE_TICKET,
 	DELETE_TICKET } from "../actionTypes";

const initialState = {
	tickets: [],
	ticketsUser: [],
	updateticket: [],
	deleteticket: [],
	newTicket:[]
}

export function  show_tickets(state = initialState, action){
	switch(action.type){
		case SHOW_TICKETS:
			return Object.assign({}, state, {tickets: action.payload})
		case SHOW_TICKETS_USER:
			return Object.assign({}, state, {ticketsUser: action.payload})
		case NEW_TICKET:
			return Object.assign({}, state, {ticketsUser: action.payload})
		case UPDATE_TICKET:
			return Object.assign({}, state, {ticketsUser: action.payload})
		case DELETE_TICKET:
			return Object.assign({}, state, {ticketsUser: action.payload})
		default: return state
	}
}

