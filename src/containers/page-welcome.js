import React, {Component} from 'react';
import anime from 'animejs';
import {CSSTransitionGroup} from 'react-transition-group'; // ES6

import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6

import '../styles/page-welcome.css';

class PageWelcome extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		anime({
			targets: '.jumpo',
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
			targets: '.jumpo',
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

				<div className="my-5 pt-5 jumbotron jumbotron-fluid jumpo">
					<div className="container-fluid">
						<h1 className="display-4">Fluid jumbotron</h1>
						<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
					</div>
				</div>


				<div className="waveWrapper waveAnimation">
					<div className="waveWrapperInner bgTop">
						<div className="wave waveTop"></div>
					</div>
					<div className="waveWrapperInner bgMiddle">
						<div className="wave waveMiddle"></div>
					</div>
					<div className="waveWrapperInner bgBottom">
						<div className="wave waveBottom"></div>
					</div>
				</div>

				{/* <div className="waveWrapper waveAnimation gradient-bg">
					<div className="waveWrapperInner bgTop">
						<div className="wave waveTop" ></div>
					</div>
					<div className="waveWrapperInner bgMiddle">
						<div className="wave waveMiddle" ></div>
					</div>
					<div className="waveWrapperInner bgBottom">
						<div className="wave waveBottom" ></div>
					</div>
				</div>  */}
			</div>
		);
	}
}
export default PageWelcome;
