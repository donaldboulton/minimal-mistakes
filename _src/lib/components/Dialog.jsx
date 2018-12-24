import React from "react";
import ReactDOM from 'react-dom';
import bars from './images/bars.svg';

const Dialog = require('react-a11y-dialog');

class MyComponent extends React.Component {
  handleClick = () => {
    this.dialog.show()
  }

  render () {
    return (
      <div>
        <button id="myBtn" className="link-like" type="button" onClick={this.handleClick}>
          <img src={bars} className="icon" alt="Menu" />
        </button>

        <Dialog id="my-accessible-dialog"
                appRoot="#app"
                dialogRoot="#dialogRoot"
                dialogRef={(dialog) => (this.dialog = dialog)}
                title="Internal Links">
          <p id="dialogDescription">
          <div id="mmain" className="gallery-4-col-unjustified" itemsScope="itemscope" itemType="https://schema.org/SiteNavigationElement">
            <div>
    		        <span className="page__title"><a rel="noreferrer" itemProp="url" href="/">Pages</a></span>
                <div className="toc1-menu">
                   <div><a rel="noreferrer" itemProp="url" href="/">Home</a></div>
                   <div><a rel="noreferrer" itemProp="url" href="/about/">About</a></div>
                   <div><a rel="noreferrer" itemProp="url" href="/contact/">Contact</a></div>
                   <span className="page__title"><a rel="noreferrer" itemProp="url" href="/site-pages/">Site Pages&nbsp;&rarr;</a></span>
                </div>
            </div>
            <div>
               <span className="page__title"><a rel="noreferrer" itemProp="url" href="/year-archive/">Posts</a></span>
                <div className="toc1-menu">
                  <div><a rel="noreferrer" itemProp="url" href="/2018-02-22-post-Letter-Avatar.html">&nbsp;Letter Avatar</a></div>
                  <div><a rel="noreferrer" itemProp="url" href="/2017-04-11-post-social-sharing.html">&nbsp;Social Sharing</a></div>
                  <div><a rel="noreferrer" itemProp="url" href="/2018-05-27-post-reviews-for-jekyll.html">&nbsp;Jekyll Reviews</a></div>
                  <span className="page__title"><a rel="noreferrer" itemProp="url" href="/categories/">Post Archives&nbsp;&rarr;</a></span>
                </div>
            </div>
            <div>
                <span className="page__title"><a rel="noreferrer" itemProp="url" href="/photography/">Galleries</a></span>
                <div className="toc1-menu">
                  <div><a rel="noreferrer" itemProp="url" href="/photography/cat-gallery/">My Cats</a></div>
                  <div><a rel="noreferrer" itemProp="url" href="/photography/stray-cat-gallery/">Stray Cats</a></div>
                  <div><a rel="noreferrer" itemProp="url" href="/photography/old-cat-gallery/">Old Cats</a></div>
                  <span className="page__title"><a rel="noreferrer" itemProp="url" href="/photography/">All Galleries&nbsp;&rarr;</a></span>
                </div>
            </div>
            <div>
                <span className="page__title"><a rel="noreferrer" itemProp="url" href="/admin/index.html">Admin</a></span>
                <div className="toc1-menu">
                   <div><a rel="noreferrer" itemProp="url" href="/admin/index.html">Admin Login</a></div>              
                </div>
            </div>
          </div>
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
