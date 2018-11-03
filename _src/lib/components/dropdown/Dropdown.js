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
      { className: 'dropdown' },
      React.createElement(
        'div',
        { className: 'button', onClick: this.showDropdownMenu },
        React.createElement(
          'span',
          null,
          React.createElement('span', { 'class': 'bm-burger-bars' }),
          React.createElement('span', { 'class': 'bm-burger-bars' }),
          React.createElement('span', { 'class': 'bm-burger-bars' })
        )
      ),
      this.state.displayMenu ? React.createElement(
        'ul',
        null,
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
            { href: '/year-archive/' },
            'Posts'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: '/about/' },
            'About'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: '/sitemap/' },
            'Sitemap'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: '/userProfile.html' },
            'Admin Profile'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: '/logout/' },
            'Log Out'
          )
        )
      ) : null
    );
  }

}

export default Dropdown;
