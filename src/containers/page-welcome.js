import React, {Component} from 'react';

import {CSSTransitionGroup} from 'react-transition-group'; // ES6

import '../styles/page-welcome.css';

class PageStart extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return (
			<div>
			<CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>

<div className="jumbotron jumbotron-fluid bg-success jumpo">
  <div className="container">
    <h1 className="display-4">Fluid jumbotron</h1>
    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>


        <div className="color-block purple-gradient z-depth-2 jumpo">
            <h5>purple-gradient</h5>
        </div>

			</CSSTransitionGroup>

		</div>
	);
	}
}
export default PageStart;
