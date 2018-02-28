import React, {Component} from 'react';
import anime from 'animejs';

import Wave from '../components/wave';
import '../styles/page-welcome.css';

class PageWelcome extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		anime({
			targets: '.middle',
			opacity: [
				0, 1
			],
			scaleY: [
				2, 1
			],
			delay: 750,
			duration: 500,
			easing: 'easeInOutQuart'
		});
	}

	componentWillLeave() {
		console.log("WILL NOUTNMOUT");
		anime({
			targets: '.middle',
			opacity: [
				1, 0
			],
			duration: 2000,

			loop: false
		});
	}

	render() {
		return (
			<div className="page-welcome">

				{/* ===== TEXT CONTENT ===== */}
				<div className="outer">
					<div className="middle">
						<div className="inner main">
							<h1 className="text-field main">Harmonic Vision</h1>
						</div>
						<div className="inner main">
							{/* // TODO: Add route for this */}
							<p id="start-link" className="text-field sub">Start</p>
						</div>
					</div>
				</div>


				{/* ===== WAVES ===== */}
				<Wave waveClass="top"/>
				
				{/* OLD */}
				{/* <div className="waveWrapper waveAnimation gradient-bg">
					<div className="waveWrapperInner bgTop">
						<div className="wave waveTop"></div>
					</div>
					<div className="waveWrapperInner bgMiddle">
						<div className="wave waveMiddle"></div>
					</div>
					<div className="waveWrapperInner bgBottom">
						<div className="wave waveBottom"></div>
					</div>
				</div> */}
			</div>
		);
	}
}
export default PageWelcome;
