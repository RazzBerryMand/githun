import React from 'react';
import '../styling/textArea.css';

class Technical extends React.Component {
  render() {
    return (
      <div className='Technical'>
        <div className='SubHeader'>
          <h2>"Let's get down to what you really want to know about me..."</h2>
        </div>
        <div className='TextContainer'>
          <div className='DeviconsWrapper'>
            <h3>What I feel confident working with</h3>
            <div className='IconsContainer'>
              <h3>Languages:</h3>
              <div className='dev-icons'>
                <i className='devicon-html5-plain' />
                <i className='devicon-css3-plain' />
                <i className='devicon-sass-original' />
                <i className='devicon-javascript-plain' />
              </div>
            </div>
            <div className='IconsContainer'>
              <h3>Libraries & Frameworks:</h3>
              <div className='dev-icons'>
                <i className='devicon-react-original-wordmark' />
                <i className='devicon-bootstrap-plain-wordmark' />
                <i className='devicon-express-original' />
                <i className='devicon-postgresql-plain' />
                <i className='devicon-mocha-plain' />
              </div>
            </div>
            <div className='IconsContainer'>
              <h3>Other Dev Tools:</h3>
              <div className='dev-icons'>
                <i className='devicon-nodejs-plain' />
                <i className='devicon-visualstudio-plain' />
                <i className='devicon-git-plain' />
                <i className='devicon-heroku-original' />
                <i className='devicon-slack-plain' />
                <i className='devicon-trello-plain' />
                <i className='devicon-gulp-plain' />
              </div>
            </div>

            <h3>Graduate of Northcoders, Manchester</h3>
            <p>I completed the 12-week developer pathway on 01/03/19.</p>
            <ul>
              <li>
                As part of the course I built a Full Stack news forum in the
                style of Reddit
              </li>
              <li>
                The Front End is hosted here:{' '}
                <a
                  href={'https://mc-news.netlify.com/'}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <b>mc-news.netlify.com/</b>
                </a>
              </li>
              <li>
                The Back End API is also available to view here:{' '}
                <a
                  href={'http://mc-news.herokuapp.com/api'}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <b> mc-news.herokuapp.com/api</b>
                </a>
              </li>
              <li>
                Links to the repos for this project are available on request
              </li>
            </ul>

            <h3>Some of my online achievements</h3>
            <p>
              I am highly fond of sharpening my dev skills using online
              resources.
            </p>
            <ul>
              <li>
                <b>Udemy:</b> JavaScript Basics for Beginners
              </li>
              <li>
                <b>freeCodeCamp:</b> Responsive Web Design Certification
              </li>
              <li>
                <b>Wes Bos:</b> ES6 for Everyone
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Technical;
