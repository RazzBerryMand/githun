import React from 'react';
import '../styling/textArea.css';

class Home extends React.Component {
  render() {
    return (
      <main className='Home'>
        <div className='SubHeader'>
          <h2>"Hello World! Thanks for stopping by."</h2>
        </div>
        <div className='TextContainer'>
          <h3>My name is Mand Cashin and I love the internet.</h3>
          <p>
            Self-declared hun (the over-familiar female variety, not a
            5th-century Asiatic nomad) and git 'micro-commit' enthusiast. Based
            in Manchester and passionate about becoming a top female web
            developer. I am highly industry aware and strive to continually
            improve my technical competencies through both self-learning and
            networking with others. Advocate of TDD, pair-programming and
            agile-inspired methodologies. Currently working as a Foundation
            Front End Developer at Code Computerlove but I also dabble in Full
            Stack when the mood takes me.
          </p>
          <p>
            Fun fact: In a former life I was an international air-hostess for
            over 8 years, and in my spare time I appear as a TV extra on
            everyone's favourite Northern soaps!
          </p>
          <h3>
            Examples of my code are available here:{' '}
            <a
              href={'https://github.com/MandSolo'}
              target='_blank'
              rel='noopener noreferrer'
              className='github-link'
            >
              github.com/MandSolo
            </a>
          </h3>
        </div>
      </main>
    );
  }
}

export default Home;
