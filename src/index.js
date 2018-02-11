// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

// React
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

// Render App
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
