import React, {Component} from 'react';

import MenuButton from '../components/menuButton';

import '../styles/page-start.css';

class PageStart extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			anim: 'in'
		};		
		
		this.startIdle = this.startIdle.bind(this);
		this.clickLeft = this.clickLeft.bind(this);
		this.clickRight = this.clickRight.bind(this);
	}
	
	componentDidMount() {
		setTimeout(this.startIdle, 1500);
	}
	
	startIdle() {
		this.setState({ anim: 'idle'});
	}
	
	clickLeft() {
		this.setState({ anim: 'goLeft'})
	}
	
	clickRight() {
		this.setState({ anim: 'goRight'})
	}
	
	render() {
		const leftClass = "side left " + this.state.anim;
		const rightClass = "side right " + this.state.anim;
		
		return (
			<div>		
				<MenuButton />
				
				<div className="block">
					
					{/* Left */}
					<div 
						id="b-l" 
						className={leftClass}
						onClick={this.clickLeft}
					/>
					
					{/* Right */}
					<div 
						id="b-r" 
						className={rightClass}
						onClick={this.clickRight}
					/>
				</div>
			</div>
		);
	}
}
export default PageStart;
