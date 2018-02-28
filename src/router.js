import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// React Router DOM v4

import PageWelcome from './containers/page-welcome';
import PageStart from './containers/page-start';
import PageContact from './containers/page-contact';

/**
 * Router
 * Routes and views to render
 */
const Router = (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={PageWelcome}/>
			<Route path='/start' component={PageStart}/>
			<Route path='/contact' component={PageContact}/>
		</Switch>
	</BrowserRouter>

)

export default Router;
