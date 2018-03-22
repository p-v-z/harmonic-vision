// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './router';

// import registerServiceWorker from './registerServiceWorker';

import './index.css';

// Render App
ReactDOM.render(
	<Provider store={store}>
			<MuiThemeProvider>
				{Router}
			</MuiThemeProvider>
	</Provider>,
	document.getElementById('root'));

// registerServiceWorker();
