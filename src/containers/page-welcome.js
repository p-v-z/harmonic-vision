import React, {Component} from 'react';
import anime from 'animejs';

import Waves from '../components/wave';
import '../styles/page-welcome.css';

class PageWelcome extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {		
		// Background
		anime({
			targets: '.page-welcome',
			opacity: [0, 1],
			delay: 0,
			duration: 2000,
			easing: 'easeInQuart'
		});
		
		// Logo
		anime({
			targets: '#logo-image',
			opacity: [0, 0.1],
			delay: 1000,
			duration: 4000,
			easing: 'easeInQuart'
		});
		
		// Text
		anime({
			targets: '.middle',
			opacity: [0, 1],
			scaleY: [2, 1],
			delay: 2000,
			duration: 1000,
			easing: 'easeInOutQuart'
		});
		
		// Biz Link
		anime({
			targets: '.biz-link',
			opacity: [0, 1],
			delay: 1000,
			duration: 3000,
			easing: 'easeInOutQuart'
		});
	}

	startExit() {
		// Background
		anime({
			targets: '.page-welcome',
			opacity: 0,
			delay: 500,
			duration: 2000,
			easing: 'easeInQuart'
		});
	
		// Logo
		anime({
			targets: '#logo-image',
			opacity: 0,
			duration: 1000,
			easing: 'easeInQuart'
		});
		
		// Text
		anime({
			targets: '.middle',
			opacity: 0,
			scaleY: 0,
			easing: 'easeInOutQuart'
		});
		
		// Biz Link
		anime({
			targets: '.biz-link',
			opacity: 0,
			easing: 'easeInOutQuart'
		});
		
		// Wave
		anime({
			targets: '.wave-container .head',
			top: -500,
			duration: 2000,
			easing: 'easeInOutQuart'
		});
		anime({
			targets: '.wave-container .foot',
			bottom: -500,
			duration: 2000,
			easing: 'easeInOutQuart'
		});
		
		// setTimeout(this.routeToNextPage.bind(this), 2500);
	}

	routeToNextPage() {
		console.log("ROOOT");
	}

	render() {
		return (
			<div className="page-welcome">

				{/* ===== BACKGROUND LOGO ===== */}
				<div id="logo-image" />

				{/* ===== TEXT CONTENT ===== */}
				<div className="outer">
					<div className="middle">
						<div className="inner main">
							<h1 className="text-field main">Harmonic Vision</h1>
						</div>
						<div className="inner main">
							{/* // TODO: Add route for this */}
							<p 
								id="start-link" 
								className="text-field sub"
								onClick={this.startExit}
								>Start</p>
						</div>
					</div>
				</div>

				{/* ===== Waves ===== */}
				<Waves />

				{/* ===== Waves ===== */}
				<div className="biz-link">

					{/* <a href="" */}
					<p>pvz</p>
				</div>

			</div>
		);
	}
}
export default PageWelcome;
