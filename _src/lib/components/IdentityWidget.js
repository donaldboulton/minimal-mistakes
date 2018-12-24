import React from 'react';
import ReactDOM from 'react-dom';
import signin from './images/sugn-in-alt.svg';
import netlifyIdentity from 'netlify-identity-widget';

class NetlifyIdentity extends React.Component {
  constructor() {
    super()

    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleLogIn () {
    netlifyIdentity.open()
  }

  render() {
    return (
      <div>
          <button id="mySigninBtn" className="link-like" type="button" onClick={this.handleLogIn} >
            <img src={signin} className="icon" alt="Login" />
          </button>
      </div>
    );
  }
}

ReactDOM.render(
  <NetlifyIdentity />,
  document.getElementById('login')
)
