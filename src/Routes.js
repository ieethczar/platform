import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {Error404} from './components/error/404.js';
import HomePage from './components/home/HomePage';
import ProductoDetailPage from './components/producto/ProductoDetailPage';

const Routes = () => (
	<Switch>
		<Route exact path="/admon" component={HomePage}/>
		<Route exact path="/producto/:id" component={ProductoDetailPage}/>
		<Route exact path="/" component={HomePage}/>
		<Route component={Error404} />
	</Switch>
	);

export default Routes;