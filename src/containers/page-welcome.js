import React, { Component } from 'react';

class BootstrapPage extends Component {
	constructor(props) {
		super(props);

		this.state = { };
	}
	
	render() {
		return(
			<div className="search-bar">
				<form>
					<input
						className="form-control"
					/>
					<input type="submit" className="btn btn-default bg-success" value="Submit" />
				</form>
			</div>
		)
	}
}

export default BootstrapPage;
