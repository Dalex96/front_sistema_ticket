import React from 'react'
import { register, show_type_user } from "../../store/actions";
import { connect } from 'react-redux'
import { ValidRollogin } from "../../middleware/session";

class Register extends React.Component{

	state = {
		email:"",
		password:"",
		id_tipouser:"",
		nombre:"",
		types: []
	}

	capValues = (e) =>{
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	componentDidMount(){
		ValidRollogin()
		this.props.show_type_user()
	}

	saveValues = (e) => {
		e.preventDefault()
		this.props.register(this.state)
	}

	render(){
		return(
			<div className="container d-flex justify-content-center">
				<div className="col-6">
					<div className="card mt-4">
					  <div className="card-body">
					  	<h1 className="text-center">Register</h1>
						<form>
						  <div className="form-group">
						    <label for="exampleFormControlInput1">Nombre</label>
						    <input 
						    	type="text" 
						    	className="form-control" 
						    	name="nombre"
						    	value={this.state.nombre}
						    	onChange={this.capValues}						    	
						    	id="nombre" 
						    	placeholder="jose"/>
						  </div>
						  <div className="form-group">
						    <label for="exampleFormControlInput2">Email</label>
						    <input 
						    	type="email" 
						    	className="form-control" 
						    	name="email"
						    	value={this.state.email}
						    	onChange={this.capValues}						    	
						    	id="email" 
						    	placeholder="name@example.com"/>
						  </div>
						  <div className="form-group">
						    <label for="exampleFormControlInput3">Password</label>
						    <input 
						    	type="password" 
						    	className="form-control" 
						    	name="password"
						    	value={this.state.password}
						    	onChange={this.capValues}						    	
						    	id="password" 
						    	placeholder="*************"/>
						  </div>
						  <hr/>
						  <div className="form-group">
						    <label for="exampleFormControlInput4">Rol</label>
						    <select 
						    	value={this.state.id_tipouser}
						    	onChange={this.capValues}							    
						    	class="form-control" 
						    	id="id_tipouser"
						    	name="id_tipouser">
						    	<option value="">-</option>
						    	{
							      this.props.types.map(type => (<option value={type._id}>{type.nombre}</option>))
							  	}
						    </select>
						  </div>
						   <button type="submit" onClick={this.saveValues} class="btn btn-dark btn-block">Registrar</button>
						</form>  
					  </div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	register: state.register.register,
	types: state.type.type
})

export default connect(mapStateToProps, { register, show_type_user })(Register)