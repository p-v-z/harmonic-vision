import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import '../styles/app.css';

import PageStart from './page-start';
import PageWelcome from './page-welcome';

class App extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			currentRoute: PageWelcome
		};
	}

	render() {
		return (
		<div className="App">
			{/* <button onClick={e=> {
				setTimeout(()=>{
					this.setState({currentRoute: PageStart})
				},1000);

				}
			}>CLIK ME</button> */}
			<Route exact path='/' component={this.state.currentRoute}/>
			{/* <Link to='/page-welcome'>Roster</Link> */}
			{/* <PageWelcome/> */}
		</div>);
	}
}

export default App;
