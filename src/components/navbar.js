import React from 'react';
import { Link } from '@reach/router';
import '../styling/navbar.css';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <Link to='/'>About</Link>
      <Link to='/technical'>Technical Skills</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  );
};

export default Navbar;
