import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from '../pages/admin'; 
import User from '../pages/user'; 
import Login from '../pages/login/login'; 
import Register from '../pages/login/register'; 


const Routes = () => {
	return (
		<Switch>
			<Route exact path="/admin" component={Admin} />
			<Route exact path="/user" component={User} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
		</Switch>
	)
}

export default Routes;