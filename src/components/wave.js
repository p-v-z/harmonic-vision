import React, { Component } from 'react';

import '../styles/wave.css';

class Waves extends Component {
	render() {
		return (
			<div className="wave-container">
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

export default Waves;
