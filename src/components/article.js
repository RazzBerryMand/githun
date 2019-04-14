import React from "react";
import { Link } from "@reach/router";
import moment from "moment";
import "../styling/textArea.css";

class SingleArticle extends React.Component {
  render() {
    const { blogname } = this.props;
    const articleData = this.props.article.filter(
      article => article.slug === blogname
    );

    return (
      <div className="SingleArticle">
        <div className="SubHeader">
          <h2>"Remember to check back for my latest blogs!"</h2>
        </div>

        <div className="TextContainer">
          <h3>{articleData[0].title}</h3>
          <p>
            <em>
              This post was created{" "}
              {moment(articleData[0].date)
                .startOf("hour")
                .fromNow()}
              .
            </em>
          </p>
          <p>{articleData[0].bodyA}</p>
          <p>{articleData[0].bodyB}</p>
          <p>{articleData[0].bodyC}</p><p>{articleData[0].bodyD}</p>
          <h3>
            <Link to="/blog">Want to read another?</Link>
          </h3>
        </div>
      </div>
    );
  }
}

export default SingleArticle;
