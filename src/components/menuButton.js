import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import SidebarContent from './sidebar_content';

import '../styles/menuButton.css';

// const styles = {
// 	sidebar: {
// 		width: 256,
// 		height: '100%'
// 	},
// 	sidebarLink: {
// 		display: 'block',
// 		padding: '16px 0px',
// 		color: '#757575',
// 		textDecoration: 'none'
// 	},
// 	divider: {
// 		margin: '8px 0',
// 		height: 1,
// 		backgroundColor: '#757575'
// 	},
// 	content: {
// 		padding: '16px',
// 		height: '100%',
// 		backgroundColor: 'white'
// 	}
// };

class MenuButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};

		this.toggleOpen = this.toggleOpen.bind(this);
		this.onSetOpen = this.onSetOpen.bind(this);
	}

	onSetOpen(open) {
		this.setState({open: open});
	}

	toggleOpen(ev) {
		this.setState({
			open: !this.state.open
		});

		if (ev) {
			ev.preventDefault();
		}
	}

	render() {
		const sidebar = <SidebarContent/>;

		const sidebarProps = {
			sidebar: sidebar,
			open: this.state.open,
			onSetOpen: this.onSetOpen
		};

		return (
			<Sidebar {...sidebarProps}>
				<div 
					className='hamburger-icon'
					onClick={this.toggleOpen.bind(this)}
				/>
			</Sidebar>
		);
	}
}
export default MenuButton;
