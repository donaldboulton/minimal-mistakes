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
          Menu <img src={bars} className="dialog icon" alt="Menu" />
        </button>

        <Dialog id="my-accessible-dialog"
                appRoot="#main"
                dialogRoot="#dialog-root"
                dialogRef={(dialog) => (this.dialog = dialog)}
                title="Menu">
          <p>
          <ul className="navicon" role="list">
    		    <li><a rel="noreferrer" itemProp="url" href="/">Home</a></li>
            <li><a itemProp="url" href="/about/">About</a></li>
    		    <li><a itemProp="url" href="/year-archive/">Posts</a></li>
            <li><a itemProp="url" href="/photography/">Gallery</a></li>
    		    <li><a itemProp="url" href="/sitemap/">Sitemap</a></li>
    		    <li><a itemProp="url" href="/userProfile.html">User Profile</a></li>
    		    <li><a itemProp="url" href="/admin/index.html">Admin</a></li>              
          </ul>
          </p>
        </Dialog>
      </div>
    )
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('main')
)
