import React, { Component } from 'react';
// import anime from 'animejs';

import '../styles/page-scroller.css';

class Icon extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let logoClass = `logo ${this.props.addClass}`;
		return (
			<div className="icon-container">
				<div className={logoClass}></div>
				<p className="text">
					{this.props.iconText}
				</p>
			</div>
		)
	}
}

export default Icon;
