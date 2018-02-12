import React, {Component} from 'react';

import '../styles/app.css';

import PageStart from './page-start';
import PageWelcome from './page-welcome';

class App extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {};
	}

	render() {
		return (<div className="App">
			<PageWelcome/>
		</div>);
	}
}

export default App;
