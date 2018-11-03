import React from 'react';
import './style.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown">
	        <div className="menu-trigger" onClick={this.showDropdownMenu}>
          <span className="start">
            <a href="#">
                <svg preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="-5 -5 34 34">
                    <g><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="white"></path></g>
                </svg>
            </a>
          </span>
          </div>

          { this.state.displayMenu ? (
          <ul className="menu" role="menu">
    		   <li><a className="active" href="/admin/index.html">Create Page</a></li>
              <ul>
                <li><a href="#">Level 3</a>
                  <ul>
                      <li><a href="#">Level 4</a></li>
                      <li><a href="#">Level 4</a></li>
                      <li><a href="#">Level 4</a></li>
                  </ul>
                  </li>
                      <li><a href="#">Level 3</a></li>
                      <li><a href="#">Level 3</a></li>
                </ul>
    		   <li><a href="/">Home</a></li>
    		   <li><a href="/year-archive/">Posts</a></li>
    		   <li><a href="/about/">About</a></li>
    		   <li><a href="/sitemap/">Sitemap</a></li>
    		   <li><a href="/userProfile.html">Admin Profile</a></li>
    		   <li><a href="/logout/">Log Out</a></li>
          </ul>
        ):
        (
          null
        )
        }
	      </div>
    );
  }


}

export default Dropdown;
