import axios from 'axios'
import { 
	SHOW_TICKETS, 
	SHOW_TICKETS_USER, 
	LOGIN, 
	REGISTER,
	SHOW_TYPE_USER,
	SHOW_USER_EMAIL,
	NEW_TICKET,
	SHOW_USERS,
	UPDATE_TICKET,
	DELETE_TICKET,
	LOGOUT_USERS } from "./actionTypes";


export function showTicket(){
	return (dispatch, getState) => {
		axios.get('http://localhost:4000/api/v1/tickets')
			.then((res) => {
				console.log(res.data)
				dispatch({
					type: SHOW_TICKETS,
					payload: res.data
				})
			})
	}
}
export function newTicket(params){
	return (dispatch, getState) => {
		axios.post('http://localhost:4000/api/v1/tickets', params)
			.then((res) => {
				console.log(res.data)
				dispatch({
					type: NEW_TICKET,
					payload: res.data
				})
			})
	}
}

export function updateTicket(id, params){
	return (dispatch, getState) => {
		axios.put(`http://localhost:4000/api/v1/tickets/${id}`, params)
			.then((res) => {
				console.log(res.data)
				dispatch({
					type: UPDATE_TICKET,
					payload: res.data
				})
			})
	}
}

export function deleteTicket(id){
	return (dispatch, getState) => {
		axios.delete(`http://localhost:4000/api/v1/tickets/${id}`)
			.then((res) => {
				console.log(res.data)
				dispatch({
					type: DELETE_TICKET,
					payload: res.data
				})
			})
	}
}

export function showTicketUser(id){
	console.log(id)
	return (dispatch, getState) => {
		axios.get(`http://localhost:4000/api/v1/tickets/${id}/user`)
			.then((res) => {
				dispatch({
					type: SHOW_TICKETS_USER,
					payload: res.data
				})
			})
	}
}

export function showUserEmail(email){
	return (dispatch, getState) => {
		axios.get(`http://localhost:4000/api/v1/users/${email}/email`)
			.then((res) => {
				dispatch({
					type: SHOW_USER_EMAIL,
					payload: res.data
				})
			})
	}
}

export function showUsers(email){
	return (dispatch, getState) => {
		axios.get(`http://localhost:4000/api/v1/users`)
			.then((res) => {
				dispatch({
					type: SHOW_USERS,
					payload: res.data
				})
			})
	}
}

export function logout(){
	return (dispatch, getState) => {
		axios.get(`http://localhost:4000/api/v1/auth/logout`)
			.then((res) => {
				dispatch({
					type: LOGOUT_USERS,
					payload: res.data
				})
			})
			localStorage.removeItem("key")
			window.location.href="http://localhost:3000/login";

	}
}

export function login(params){
	return (dispatch, getState) => {
		axios.post('http://localhost:4000/api/v1/auth/login', params)
			.then((res) => {
				dispatch({
					type: LOGIN,
					payload: res.data
				})
				localStorage.setItem('key', JSON.stringify(res.data))
				if(!res.data.data.admin){
					window.location.href="http://localhost:3000/user";
				}else{
					window.location.href="http://localhost:3000/admin";
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}
}

export function register(params){
	return (dispatch, getState) => {
		axios.post('http://localhost:4000/api/v1/users', params)
			.then((res) => {
				console.log(res.data)
				dispatch({
					type: REGISTER,
					payload: res.data
				})
				window.location.href="http://localhost:3000/login";
			})
			.catch((error) => {
				console.log(error)
			})
	}
}

export function show_type_user(params){
	return (dispatch, getState) => {
		axios.get('http://localhost:4000/api/v1/types')
			.then((res) => {
				console.log(res.data)
				dispatch({
					type: SHOW_TYPE_USER,
					payload: res.data
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}
}


