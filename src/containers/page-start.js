import React, { Component } from 'react';

import '../styles/page-start.css';

class PageStart extends Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
  }

  render() {
    return (
      <div>
		  <button>Add Item</button>
      </div>
    );
  }
}
export default PageStart;
