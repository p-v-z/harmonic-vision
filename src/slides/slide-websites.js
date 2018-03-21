import React, { Component } from 'react';
import {Parallax} from 'react-parallax';
// import anime from 'animejs';

import SlideHeader from '../components/slide-header';
import Icon from '../components/icon';

import '../styles/slide-websites.css';

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

				<SlideHeader headerTitle="Websites" headerClass="websites" />
				<div className="fader websites" />

				<Parallax 
					bgImage={require('../assets/parallax/websites.jpg')}
					strength={-200}
					bgStyle={{top: -1}}
				>
					<div className="websites-container">
						<div className="slide-content">
							<Icon addClass="javascript" iconText="JavaScript"/>
							<Icon addClass="html glow" iconText="HTML"/>
							<Icon addClass="css glow" iconText="CSS"/>
							<Icon addClass="jquery" iconText="jQuery"/>
							<Icon addClass="react" iconText="React"/>
							<Icon addClass="redux" iconText="Redux"/>
							<Icon addClass="bootstrap" iconText="Bootstrap"/>
							<Icon addClass="sass" iconText="Sass"/>
							<Icon addClass="materialui" iconText="MaterialUI"/>
							{/* <Icon addClass="createjs" iconText="CreateJS"/> */}
							<Icon addClass="nodejs" iconText="Node.js"/>
							<Icon addClass="npm" iconText="npm"/>
							<Icon addClass="grunt" iconText="Grunt"/>
							<Icon addClass="git" iconText="git"/>
							<Icon addClass="graphcms" iconText="GraphCMS"/>
						</div>
					</div>
				</Parallax>
			</div>
		)
	}
}

export default SlideWebsites;
