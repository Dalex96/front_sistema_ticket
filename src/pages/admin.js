import React from 'react';
import Table from '../components/table';
import { Validlogin } from "../middleware/session";

class Admin extends React.Component {

	componentDidMount(){
		Validlogin()
	}

	render(){
		return(
			<div>
				<Table/>
			</div>
		) 
	}
}

export default Admin