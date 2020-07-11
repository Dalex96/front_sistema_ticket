import React from 'react'
import { showTicketUser, showTicket } from "../store/actions";
import { connect } from 'react-redux'
import Modal from './modal'
import ModalDelete from './modal_delete'

class Table extends React.Component{

	state = {
		all: false,
		data:{
			act:"update",
			ticket:{}
		},
		dataDelete:{}
	}

	componentDidMount(){
		const activeSession = localStorage.getItem('key')
		const sesion = JSON.parse(activeSession)
		if(sesion){
			if(sesion.data.admin){
				this.props.showTicket()
				this.setState({
					all:true
				})
			}else{
				this.props.showTicketUser(sesion.data.user)
				this.setState({
					all:false
				})			
			}	
		}
	}

	showData = (ticket, act) => {
		this.setState({
			data:{
				act:act,
				ticket:ticket
			}
		})
	}

	deleteTicket = (ticket) => {
		this.setState({
			dataDelete: ticket
		})
	}

	render(){
		return(
			<div className="container">
				<ModalDelete data={this.state.dataDelete}/>	
				<Modal data={this.state.data}/>
				<h1 className="mt-3">Tickets</h1>
				<table className="table table-bordered mt-3">
				  <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">Ticket Pedido</th>
				      {this.state.all ? <th scope="col">Acciones</th> : ""}
				      {this.state.all ? <th scope="col"><button type="button" className="btn btn-dark btn-block" data-toggle="modal" data-target="#exampleModal" name="new" onClick={() => this.showData({ticket:{}}, "new")}>Nuevo</button></th> : ""}
				    </tr>
				  </thead>
				  <tbody>
				    	{
				    		this.state.all ?
					    		this.props.tickets.map(ticket =>(
						    	<tr key={ticket._id}>
							      <th>{ticket._id}</th>
							      <td>{ticket.ticket_pedido}</td>
							      <td><button type="button" 
							      		className="btn btn-dark btn-block" 
							      		data-toggle="modal" 
							      		data-target="#exampleModal"
							      		name="update"
							      		onClick={() => this.showData(ticket, "update")}>Editar</button></td>
							      <td><button 
							      		type="button" 
							      		className="btn btn-dark btn-block"
							      		data-toggle="modal" 
							      		data-target="#exampleModalDelete"
							      		onClick={() => this.deleteTicket(ticket)}>Eliminar</button></td>
						    	</tr>
					    		))
				    		:
					    		this.props.ticketsUser.map(ticket =>(
						    	<tr key={ticket._id}>
							      <th>{ticket._id}</th>
							      <td>{ticket.ticket_pedido}</td>
						    	</tr>
					    		))				    			
				    	}
				  </tbody>
				</table>
				<br/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	ticketsUser: state.ticket.ticketsUser,
	tickets: state.ticket.tickets
})

export default connect(mapStateToProps, { showTicketUser, showTicket })(Table)
