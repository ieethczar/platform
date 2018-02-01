import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage}/>
		<Route render={()=><h2>Error 404</h2>} />
	</Switch>
	);

export default Routes;