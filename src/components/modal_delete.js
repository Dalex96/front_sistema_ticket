import React from 'react'
import { deleteTicket } from "../store/actions";
import { connect } from 'react-redux'

class ModalDelete extends React.Component{

	delete = () =>{
		this.props.deleteTicket(this.props.data._id)
		window.location.reload(true);
	}

	render(){
		return(
			<div className="container">
				<div className="modal fade" id="exampleModalDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalDeleteLabel" aria-hidden="true">
				  <div className="modal-dialog">
				    <div className="modal-content">
						<div className="modal-header">
							<h6 className="modal-title" id="exampleModalDeleteLabel">Ticket N° {this.props.data._id}</h6>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<h4 className="d-flex justify-content-center">¿Desea eliminar este tickect?</h4>
						</div>
						<div className="modal-footer">
							<button 
								type="submit" 
								className="btn btn-outline-dark"
								onClick={this.delete}
								>Eliminar</button>
								<button 
								type="submit" 
								className="btn btn-dark"
								data-dismiss="modal" aria-label="Close"
								>Cancelar</button>
						</div>				      
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	deleteTicket: state.ticket.deleteTicket
})

export default connect(mapStateToProps, { deleteTicket })(ModalDelete)