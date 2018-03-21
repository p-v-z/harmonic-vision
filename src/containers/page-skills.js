import React, {Component} from 'react';
 
import '../styles/page-skills.css';

import SlideWebsites from '../slides/slide-websites';
import SlideVideoGames from '../slides/slide-games';
import SlideMusic from '../slides/slide-music';
import SlidePhotography from '../slides/slide-photography';
import SlideContact from '../slides/slide-contact';

class PageSkills extends Component {
	constructor(props) {
		super(props);
	   this.state={};
	}
	
	render() {
		return (
				<div className="slide-reel">
					<SlideWebsites />
					<SlideVideoGames />
					<SlideMusic />
					<SlidePhotography />
					<SlideContact />
				</div>
		)
	}
}

export default PageSkills
