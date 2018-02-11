import React, { Component } from 'react';

import '../styles/app.css';

import PageStart from './page-start';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }
  
  render() {	  
    return (
      <div className="App">
		<PageStart />
      </div>
    );
  }
}

export default App;
