import React from 'react';
import './style.css';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

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
    return React.createElement(
      'div',
      { className: 'author__urls-wrapper' },
      React.createElement(
        'div',
        { className: 'bm-burger-button icon', onClick: this.showDropdownMenu }        
      ),
      this.state.displayMenu ? React.createElement(
        'ul',
        { className: 'author__urls social-icons' },
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { className: 'active', href: '/admin/index.html' },
            'Create Page'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: '/' },
            'Home'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: '/About' },
            'About'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement('a', { href: '#Setting' }),
          'Posts'
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: '/photography/' },
            'Gallery'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: '/contact/' },
            'Contact'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: '/user-profile/' },
            'Profile'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: '#Log Out' },
            'Log Out'
          )
        )
      ) : null
    );
  }
}

export default Dropdown;
