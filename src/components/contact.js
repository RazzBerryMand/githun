import React from 'react';
import '../styling/textArea.css';

class Contact extends React.Component {
  render() {
    return (
      <div className='Contact'>
        <div className='SubHeader'>
          <h2>"Like what you've seen so far?"</h2>
        </div>
        <div className='TextContainer'>
          <h3>I would love to hear from you!</h3>
          <p>
            I'm keen to talk at meet-ups and work on projects with others. Feel
            free to drop me a message and I will get back to you as soon as
            possible.
          </p>
          <h3>
            Email me anytime at:{' '}
            <a
              href='mailto:mandcashin@hotmail.co.uk'
              target='_blank'
              rel='noopener noreferrer'
            >
              mandcashin@hotmail.co.uk
            </a>
          </h3>
          <p>
            You can also connect with me on Github, LinkedIn and codewars via
            the icons at the bottom of this page.
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
