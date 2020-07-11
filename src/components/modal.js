import React from 'react'
import { newTicket, showUsers, updateTicket } from "../store/actions";
import { connect } from 'react-redux'

class Modal extends React.Component{

	state = {
		ticket_pedido:"",
		id_user:""
	}

	capValues = (e) =>{
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	componentDidMount(){
		this.props.showUsers()
		if(this.props.data.act === "update"){
			this.setState({
				ticket_pedido:this.props.data.ticket.ticket_pedido,
				id_user:this.props.data.ticket.id_user			
			})
		}
	}

	saveValues = (e) => {
		e.preventDefault()
		console.log(this.state)
		if(this.state.ticket_pedido && this.state.id_user){
			console.log("tiene datos")
			if(this.props.data.act === "new"){
				this.props.newTicket(this.state)
				window.location.reload(true);
			}else if(this.props.data.act === "update"){
				console.log("paso")
				this.props.updateTicket(this.props.data.ticket._id, this.state)
				window.location.reload(true);
			}
		}else{
			console.log("no tiene datos")
		}
		this.setState({
			ticket_pedido:"",
			id_user:""
		})
	}
	
	render(){
		return(
			<div className="container">
				<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div className="modal-dialog">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title" id="exampleModalLabel">{this.props.data.act === 'new' ? "Nuevo" : "Editar"}</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
							<form>
								<div className="form-group">
									<label for="exampleFormControlInput1">Pedido</label>
									<textarea 
										className="form-control" 
										id="exampleFormControlTextarea1" 
										rows="3"
										value={this.state.ticket_pedido}
										name="ticket_pedido"
										onChange={this.capValues}>{this.state.ticket_pedido}</textarea>
								</div>
								<div className="form-group">
									<label for="exampleFormControlInput1">Asignar Usuario</label>
								    <select 
								    	value={this.state.id_user}
								    	onChange={this.capValues}							    
								    	className="form-control" 
								    	id="id_user"
								    	name="id_user">
								    	<option value="">{this.state.id_user ? this.state.id_user : "-"}</option>
									    	{
										      this.props.users.map(user => (<option key={user._id} value={user._id}>{user.nombre}</option>))
										  	}								    	
								    </select>									
								</div>
								<div className="modal-footer">
									<button 
										type="submit" 
										className="btn btn-dark"
										onClick={this.saveValues}
										>{this.props.data.act === 'new' ? "Crear" : "Actualizar"}</button>
								</div>
							</form>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	newTicket: state.ticket.newTicket,
	updateTicket: state.ticket.updateTicket,
	users: state.user.users
})

export default connect(mapStateToProps, { newTicket, showUsers, updateTicket })(Modal)