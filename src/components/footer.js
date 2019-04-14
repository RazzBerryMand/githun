import React from 'react';
import { Link } from '@reach/router';
import githubLogo from '../images/github.png';
import linkedinLogo from '../images/linkedin.png';
import '../styling/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='Footer'>
        <p>
          <Link to='/'>© 2019 GitHun</Link> | Written by Mand Cashin | Powered
          by React{' '}
        </p>
        <p>
          <a
            href={'https://github.com/MandSolo'}
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <img src={githubLogo} alt='Github Logo' />
          </a>{' '}
          <a
            href={'https://www.linkedin.com/in/amandacashin1/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={linkedinLogo} alt='LinkedIn Logo' />
          </a>{' '}
        </p>

        <p>
          <a
            href={'https://www.codewars.com/users/MandSolo'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={'https://www.codewars.com/users/MandSolo/badges/small'}
              alt='Codewars'
            />
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
