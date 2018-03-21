import React, {Component} from 'react';
import anime from 'animejs';

// import MenuButton from '../components/menuButton';
import Waves from '../components/wave';

import '../styles/page-welcome.css';

class PageWelcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			height: 0
		};

		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.routeToNextPage = this.routeToNextPage.bind(this);
	}

	componentDidMount() {
		// Listen for resize
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);

		////////////////////////////////////////////////////
		// eslint-disable-next-line
		{/* -> Animate IN */
			let pageIn = 3000;

			anime({ // Background
				targets: '.page-welcome',
				opacity: [0, 1],
				delay: 0,
				duration: pageIn,
				easing: 'easeInQuart'
			});
			anime({ // Logo
				targets: '#logo-image',
				opacity: [0, 0.09],
				delay: pageIn/2,
				duration: pageIn/2,
				easing: 'easeInQuart'
			});

			anime({ // Text
				targets: '.middle',
				opacity: [0, 1],
				scaleY: [2, 1],
				delay: pageIn,
				duration: 1000,
				easing: 'easeInOutQuart'
			});
			anime({ // Biz Link
				targets: '.biz-link',
				opacity: [0, 1],
				delay: pageIn,
				duration: 3000,
				easing: 'easeInOutQuart'
			});
		}
		////////////////////////////////////////////////////
	}

	updateWindowDimensions() {
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	handleClick() {
		////////////////////////////////////////////////////
		// eslint-disable-next-line
		{/* Animate OUT -> */
			let pageOut = 2000;

			// Background
			anime({
				targets: '.page-welcome',
				opacity: 0,
				delay: pageOut / 4,
				duration: pageOut,
				easing: 'easeInQuart'}
			);

			// Logo
			anime({
				targets: '#logo-image',
				opacity: 0,
				rotate: '1turn',
				duration: pageOut,
				easing: 'easeInQuart'
			});

			// Text
			anime({
				targets: '.middle',
				opacity: 0,
				duration: pageOut*0.89,
				easing: 'easeInBack'
			});
			anime({
				targets: '.middle',
				scale: 0,
				duration: pageOut*0.9,
				easing: 'easeInBack'
			});

			// Biz Link
			anime({
				targets: '.biz-link',
				opacity: 0,
				duration: pageOut / 4
			});

			// Waves
			anime({targets: '.wave-container .head', top: -500, duration: pageOut, easing: 'easeInOutQuart'});
			anime({targets: '.wave-container .foot', bottom: -500, duration: pageOut, easing: 'easeInOutQuart'});
		}
		////////////////////////////////////////////////////

		setTimeout(this.routeToNextPage, 2750);
	}

	routeToNextPage() {
		this.props.history.push('/skills');
	}

	componentWillUnmount() {
		// Destroy listeners
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	render() {
		let width = this.state.width;
		let height = this.state.height;

		// Center logo
		let logoSize,topOff,leftOff;
		if (width <= height) { // Portrait
			logoSize = width * 0.9;
			topOff = (height - logoSize) / 2;
			leftOff = width * 0.05;
			console.log(`Screen orientation: Portrait (${width}px | ${height}px)`);
		} else { // Landscape
			logoSize = height * 0.9;
			topOff = height * 0.05;
			leftOff = (width - logoSize) / 2;
			console.log(`Screen orientation: Landscape  (${width}px | ${height}px)`);
		}

		return (
			<div className="page-welcome">
				{/* <MenuButton /> */}

				{/* ===== BACKGROUND LOGO ===== */}
				<div id="logo-image"
					style={{
						width: logoSize,
						height: logoSize,
						top: topOff,
						left: leftOff
					}}/>

				{/* ===== TEXT CONTENT ===== */}
				<div className="outer">
					<div className="middle">

						<div className="inner main">
							<h1 className="text-field main">Harmonic Vision</h1>
						</div>

						<div className="inner main">
							<p
								id="start-link"
								className="text-field sub"
								onClick={this.handleClick}
							>
								Start
							</p>
						</div>

					</div>
				</div>

				{/* ===== Waves ===== */}
				<Waves/>

				{/* ===== Biz Link ===== */}
				{/* <div className="biz-link"> */}
					{/* <a href="" */}
					{/* <p>pvz</p> */}
				{/* </div> */}

			</div>
		);
	}
}
export default PageWelcome;
