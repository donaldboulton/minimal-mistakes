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
        <div className="dropdown" style = {{background:"#1d1d1d",width:"80px"}} >
         <div className="bm-burger-button button" style="z-index: 1000;" onClick={this.showDropdownMenu}>
            <span>
            <span className="bm-burger-bars" style="position: absolute; height: 20%; left: 0px; right: 0px; top: 0%; opacity: 1;"></span>
            <span className="bm-burger-bars" style="position: absolute; height: 20%; left: 0px; right: 0px; top: 40%; opacity: 1;"></span>
            <span className="bm-burger-bars" style="position: absolute; height: 20%; left: 0px; right: 0px; top: 80%; opacity: 1;"></span>
            </span>
         </div>
          { this.state.displayMenu ? (
          <ul className="toc__menu">
         <li><a className="active" href="/admin/index.html">Create Page</a></li>
         <li><a href="/">Home</a></li>
         <li><a href="/About">About</a></li>
         <li><a href="#Setting"></a>Posts</li>
         <li><a href="/photography/">Gallery</a></li>
         <li><a href="/contact/">Contact</a></li>
         <li><a href="/user-profile/">Profile</a></li>
         <li><a href="#Log Out">Log Out</a></li>
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
