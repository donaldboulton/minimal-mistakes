import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import netlifyIdentity from 'netlify-identity-widget';


class NetlifyIdentity extends React.Component {
  constructor() {
    super()

    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn () {
    netlifyIdentity.open();
  }

  render() {
    return (
      <div>
          <button onClick={this.handleLogIn} >Log in</button>
      </div>
    );
  }
}

ReactDOM.render(
  <NetlifyIdentity />,
  document.getElementById('login')
)
