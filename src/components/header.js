import React from 'react';
import { Link } from '@reach/router';
import '../styling/header.css';

class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <h1 className='Header__heading'>
          <Link to='/' className='Header__heading-link'>
            GitHun
          </Link>
        </h1>
      </header>
    );
  }
}

export default Header;
