import React from 'react';
import { Link } from '@reach/router';
import '../styling/textArea.css';

const TitleComponent = props => (
  <Link to={`${props.articleDetails.href}`}>{props.articleDetails.title}</Link>
);

const DateComponent = props => (
  <Link to={`${props.articleDetails.href}`}>{props.articleDetails.date}</Link>
);

class Blog extends React.Component {
  render() {
    return (
      <div className='Blog'>
        <div className='SubHeader'>
          <h2>"My thoughts and views as a female in tech."</h2>
        </div>
        <div className='TextContainer'>
          <h3>
            As a developer I believe that you cannot fully grow without sharing
            your experiences with others. Please read my blogs below and follow
            me on my coding journey!
          </h3>
          <div className='BlogLinkWrapper'>
            {this.props.articles.map((article, index) => (
              <div className='BlogLink' key={index}>
                <h3>
                  <TitleComponent articleDetails={article} />
                </h3>
                Created on: <DateComponent articleDetails={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
