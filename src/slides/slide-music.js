import React, { Component } from 'react';
import {Parallax} from 'react-parallax';
import SlideHeader from '../components/slide-header';


import '../styles/slide-music.css';

class SlideWebsites extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
	}
	
	render() {
		return (
			<div className="slide-container">

				<SlideHeader headerTitle="Music" headerClass="music" />
				<div className="fader music" />
				
				<Parallax 
					bgImage={require('../assets/parallax/music.jpg')}
					strength={100}
				>
					<div className="music-container">
						<div className="slide-content">
							
							<h3>Modern Music Production</h3>
							<ul>
							  <li>Fundaments</li>
							  <li>Audio engineering basics</li>
							  <li>Music sequencing and arrangements</li>
							  <li>The modern music business</li>
							</ul>
							
							<div className="icon-container-ableton">
								<div className="ableton"></div>
								<p className="ableton-text">Ableton Live</p>
							</div>
						</div>
					</div>
					
				</Parallax>
			</div>
		)
	}
}

export default SlideWebsites;
