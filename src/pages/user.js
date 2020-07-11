import React from 'react';
import Table from '../components/table'; 
import { Validlogin } from "../middleware/session";

class User extends React.Component {

	componentDidMount(){
		Validlogin()
	}
	
	render(){
		return <Table/>
	}
}

export default User