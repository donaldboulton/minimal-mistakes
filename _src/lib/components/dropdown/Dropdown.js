import React from 'react';
import burgerbars from './burgerbars.svg';
import './Style.css';


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
        <div className="dropdown">
	        <div className="menu-trigger" onClick={this.showDropdownMenu}>
          <span className="start">
            <a href="#">
               <img src={burgerbars} alt="burgerbars" />
            </a>
          </span>
          </div>

          { this.state.displayMenu ? (
          <ul className="menu" role="menu">
    		   <li><a className="active" href="/">Home</a></li>
              <ul>
                <li><a href="#">Links</a>
                  <ul>
                    <li><a href="/">Home</a></li>
    		            <li><a href="/year-archive/">Posts</a></li>
    		            <li><a href="/about/">About</a></li>
                    <li><a href="/photography/">Gallery</a></li>
    		            <li><a href="/sitemap/">Sitemap</a></li>
    		            <li><a href="/userProfile.html">Admin Profile</a></li>
    		            <li><a href="/admin/index.html">Admint</a></li>
                  </ul>
                  </li>
                      <li><a href="#">Level 3</a></li>
                      <li><a href="#">Level 3</a></li>
                </ul>
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
