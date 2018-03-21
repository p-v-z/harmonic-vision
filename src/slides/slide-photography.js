import React, { Component } from 'react';
import {Parallax} from 'react-parallax';
import Slider from 'react-slick';

import SlideHeader from '../components/slide-header';

import '../styles/slide-photography.css';

import pic1 from '../assets/pics/p1.jpg';
import pic2 from '../assets/pics/p2.jpg';
import pic3 from '../assets/pics/p3.jpg';
import pic4 from '../assets/pics/p4.jpg';
import pic5 from '../assets/pics/p5.jpg';
import pic6 from '../assets/pics/p6.jpg';
import pic7 from '../assets/pics/p7.jpg';

class SlidePhotography extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
	}

	render() {
	    var settings = {
	      dots: true,
		  arrows: false,
			fade: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1,
				pauseOnHover: false,
		  draggable: true,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  adaptiveHeight: true
	    };

		return (
			<div className="slide-container">

				<SlideHeader headerTitle="Photography" headerClass="photography" />
				<div className="fader photo" />

				<Parallax
					bgImage={require("../assets/parallax/photography.jpg")}
					strength={200}
				>

					<div className="pics-container">
						<div className="paper-pics">

						    <Slider {...settings}>
								<img src={pic1} alt=""/>
								<img src={pic2} alt=""/>
								<img src={pic3} alt=""/>
								<img src={pic4} alt=""/>
								<img src={pic5} alt=""/>
								<img src={pic6} alt=""/>
								<img src={pic7} alt=""/>
						    </Slider>

						</div>
					</div>

				</Parallax>
			</div>
		)
	}
}

export default SlidePhotography;
