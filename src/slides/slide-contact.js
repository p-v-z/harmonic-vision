import React, { Component } from 'react';

import '../styles/slide-contact.css';

class SlideContact extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="contact">
				
				<h3>Contact</h3>
				
				<div className="personal">
					<h5>Petrie van Zyl</h5>
					<p>
						Cape Town <br/>
						South Africa <br/>
					</p>
					<a href="mailto:pvanzyl.work@gmail.com">pvanzyl.work@gmail.com</a>
					
					
					<a className="linkedin" href="https://www.linkedin.com/in/petrie-van-zyl" />
				</div>		
				<br/>
			
			</div>
		)
	}
}

export default SlideContact;
