import React from 'react';
import { logout } from "../store/actions";
import { connect } from 'react-redux'

class Nav extends React.Component {

	state = {
		show: false
	}

	componentDidMount(){
  		const activeSession = localStorage.getItem('key')
		const sesion = JSON.parse(activeSession)
		if (sesion) {
			this.setState({
				show:true
			})
		}		
	}

	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <a className="navbar-brand" href="/login">
			    Dashboard
			  </a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNavDropdown">
			  <hr/>
			    <ul className="navbar-nav">
			      <li className="nav-item active">
			      {
			      	this.state.show ?
		        	<a className="btn btn-danger" href="#" onClick={this.props.logout}>Cerrar Sesion <span className="sr-only">(current)</span></a>
		        	:
		        	<a href="#"> </a>
			      }
			      </li>
			    </ul>
			  </div>
			</nav>	
		)
	}
}

const mapStateToProps = state => ({
	logout: state.login.logout
})

export default connect(mapStateToProps, { logout })(Nav)