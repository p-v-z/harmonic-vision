import React, {Component} from 'react';

import MenuButton from '../components/menuButton';

import '../styles/page-start.css';

class PageStart extends Component {
	render() {
		return (
			<div>		
				<MenuButton />
				{/* <div>a</div> */}
				{/* <div>b</div> */}
				<div className="block">
					<div className="side left" />
					<div className="side right" />
				</div>
			</div>
		);
	}
}
export default PageStart;
