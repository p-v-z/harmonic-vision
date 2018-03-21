import React, { Component } from 'react';
import {Parallax} from 'react-parallax';
import Slider from 'react-slick';

import SlideHeader from '../components/slide-header';
import Icon from '../components/icon';

import anime from 'animejs';
import '../styles/slide-games.css';

import picA from '../assets/ff/a.jpg';
import picB from '../assets/ff/b.jpg';
import picC from '../assets/ff/c.jpg';
import picD from '../assets/ff/d.jpg';
import picE from '../assets/ff/e.jpg';

class SlideVideoGames extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.refs.slide.slickNext();
		this.refs.slide.slickPrev();
		anime({ // Background
			targets: '.slick-slider',
			opacity: [0, 1],
			delay: 500,
			duration: 1000,
			easing: 'easeInQuart'
		});
	}
	
	render() {
	    var settings = {
	      dots: true,
		  arrows: false,
	      infinite: true,
	      speed: 500,
		  initialSlide: 0,
	      slidesToShow: 1,
	      slidesToScroll: 1,
		  draggable: true,
		  autoplay: true,
		  autoplaySpeed: 5000,
		  adaptiveHeight: true
	    };
	
		return (
			<div className="slide-container">

				<SlideHeader headerTitle="Video Games" headerClass="games" />
				<div className="fader games" />

				<Parallax 
					bgImage={require("../assets/parallax/games.jpg")}
					strength={150}
				>
					<div className="games-container">

						{/* Fantasy Fighter */}
						<div className="paper"> 
							<h2>Fantasy Fighter</h2>
						    <Slider ref="slide" {...settings}>
								<img src={picA} alt="" onLoad={console.log("aaah")}/>
								<img src={picB} alt=""/>
								<img src={picC} alt=""/>
								<img src={picD} alt=""/>
								<img src={picE} alt=""/>
						    </Slider>
							
							<br/>
    						<Icon addClass="unity glow" iconText="Unity"/>
							
							<p className="page-text"><strong>Fantasy Fighter</strong> aims to be a top-down, multiplayer, spell-slinging, brawler game. Players control a single wizard and use magic to destroy opposing players. The game features an in-depth spell casting system.</p>
							<p className="page-text">Current status: Iteration 4 - Design</p>
						</div>
						
						{/* Slotmachines */}
						<div className="paper"> 
							<h2>Slot Machines</h2>
							<div className="slot-image" />
							
							<br/>
    						<Icon addClass="createjs glow" iconText="CreateJS"/>
							
							<p className="page-text">Server-side and front-end development of commercially used slot machine games and features.</p>
						</div>
						
					</div>
				</Parallax>
			</div>
		)
	}
}

export default SlideVideoGames;
