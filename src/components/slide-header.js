import React, { Component } from 'react';
// import anime from 'animejs';

import '../styles/page-skills.css';

class SlideHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		let cn = `header ${this.props.headerClass}`;
		return (
			<div className={cn}>
				<h2>{this.props.headerTitle}</h2>
			</div>
		)
	}
}

export default SlideHeader;
