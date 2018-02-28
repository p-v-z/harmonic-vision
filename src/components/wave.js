import React, { Component } from 'react';

import '../styles/wave.css';

class Wave extends Component {
	render() {
		let svgClass = "svgImg " + this.props.waveClass;
		console.log(svgClass);
		return (
			<div className="hero-wave">
				<div className="svgImg head top"></div>
				<div className="svgImg head mid"></div>
				<div className="svgImg head bot"></div>
				
				<div className="svgImg foot top"></div>
				<div className="svgImg foot mid"></div>
				<div className="svgImg foot bot"></div>
			</div>
		)
	}
}

export default Wave;
