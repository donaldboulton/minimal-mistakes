import React from "react";
import ReactDOM from 'react-dom';
const Dialog = require('react-a11y-dialog');
import bars from './images/bars.svg';

class MyComponent extends React.Component {
  handleClick = () => {
    this.dialog.show()
  }

  render () {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Menu
        </button>

        <Dialog className="dialog" id="my-accessible-dialog"
                appRoot="#menu"
                dialogRoot="#dialog-root"
                dialogRef={(dialog) => (this.dialog = dialog)}
                title="Internal Links">
          <p id="dialogDescription">
          <ul className="list-unstyled" itemsScope="itemscope" itemType="https://schema.org/SiteNavigationElement">
    		    <li><a rel="noreferrer" itemProp="url" href="/">Home</a></li>
            <li><a rel="noreferrer" itemProp="url" href="/about/">About</a></li>
    		    <li><a rel="noreferrer" itemProp="url" href="/year-archive/">Posts</a></li>
            <li><a rel="noreferrer" itemProp="url" href="/photography/">Gallery</a></li>
    		    <li><a rel="noreferrer" itemProp="url" href="/sitemap/">Sitemap</a></li>
    		    <li><a rel="noreferrer" itemProp="url" href="/userProfile.html">User Profile</a></li>
    		    <li><a rel="noreferrer" itemProp="url" href="/admin/index.html">Admin</a></li>              
          </ul>
          </p>
        </Dialog>
      </div>
    )
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('menu')
)
