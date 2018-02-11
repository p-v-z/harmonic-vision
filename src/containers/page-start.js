import React, { Component } from 'react';

import '../styles/app.css';

class PageStart extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }
  
  render() {	  
    return (
      <div className="lol">
	  	start page <br />
		after welcome<br />
		choose between professional or interests
      </div>
    );
  }
}

export default PageStart;
