import React, { Component } from 'react';
import anime from 'animejs';

import '../styles/wave.css';

class Waves extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		anime({
			targets: '.ocean-container',
			opacity: [0, 1],
			scaleX: [2, 1],
			delay: 1000,
			duration: 2000,
			easing: 'easeInOutQuart'
		});
	}
	
	render() {
		return (
			<div className="ocean-container">

				{/* ===== Header ===== */}
				<div className="wave-container head">
					<div className="svgImg head top"></div>
					<div className="svgImg head mid"></div>
					<div className="svgImg head bot"></div>
				</div>

				{/* ===== Footer ===== */}
				<div className="wave-container foot">
					<div className="svgImg foot top"></div>
					<div className="svgImg foot mid"></div>
					<div className="svgImg foot bot"></div>
				</div>
			</div>
		)
	}
}

export default Waves;
