import React from 'react';
import bars from '../images/bars.svg';
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
         <div className="button button.nav masthead__menu-item" onClick={this.showDropdownMenu}>Menu
         <img src={bars} className="icon icon--bars fa-bars" alt="Dropdown Menu" />
         </div>

          { this.state.displayMenu ? (
          <ul className="toc__menu">
         <li><a className="active" href="/admin/index.html">Create Page</a></li>
         <li><a href="/">Home</a></li>
         <li><a href="/About">About</a></li>
         <li><a href="#Setting"></a>Posts</li>
         <li><a href="/photography/">Gallery</a></li>
         <li><a href="/contact/">Contact</a></li>
         <li><a href="#Profile Settings">Profile</a></li>
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
