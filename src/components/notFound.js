import React from 'react';
import { Link } from '@reach/router';
import error from '../images/error.png';
import '../styling/textArea.css';

const NotFound = () => {
  return (
    <div className='NotFound'>
      <div className='TextContainer'>
        <div className='ErrorPageImage'>
          <img src={error} alt='404 Page Not Found' />
        </div>
        <p>
          You shouldn't be here, sorry! You can return to the home page by
          clicking{' '}
          <Link to='/'>
            <b>back</b>
          </Link>
          !
        </p>
      </div>
    </div>
  );
};

export default NotFound;
