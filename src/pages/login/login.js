import React from 'react'
import { login } from "../../store/actions";
import { connect } from 'react-redux'
import { ValidRollogin } from "../../middleware/session";

class Login extends React.Component{

	state = {
		email:"",
		password:""
	}

	capValues = (e) =>{
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	componentDidMount(){
		ValidRollogin()
	}

	saveValues = (e) => {
		e.preventDefault()
		this.props.login(this.state)
	}
	render(){
		return(
			<div className="container d-flex justify-content-center">
				<div className="col-6">
					<div className="card mt-5">
					  <div className="card-body">
					  	<h1 className="text-center">Login</h1>
						<form>
						  <div className="form-group">
						    <label for="exampleFormControlInput1">Email</label>
						    <input 
						    	type="email" 
						    	className="form-control" 
						    	name="email" id="email"
						    	value={this.state.email}
						    	onChange={this.capValues}
						    	placeholder="name@example.com"/>
						  </div>
						  <div className="form-group">
						    <label for="exampleFormControlInput1">Password</label>
						    <input 
						    	type="password" 
						    	className="form-control" 
						    	name="password" 
						    	id="password"
						    	value={this.state.password}
						    	onChange={this.capValues}						    	
						    	placeholder="************"/>
						  </div>
							<button 
								type="submit" 
								className="btn btn-dark btn-block"
								onClick={this.saveValues}
							>Ingresar</button>
						</form>  
					  </div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	login: state.login.login
})

export default connect(mapStateToProps, { login })(Login)