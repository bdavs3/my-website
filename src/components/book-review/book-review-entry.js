import React from "react";
import _ from "lodash";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import FluidImage from "../utilities/fluid-image";
import Modal from "./modal";
import Tag from "./tag";

import "./styles/book-review-entry.scss";

class BookReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsOpen: false,
    };
  }

  render() {
    const {
      data,
      author,
      content,
      coverImage,
      excerpt,
      rating,
      title,
      tags,
    } = this.props;

    return (
      <div className="book-review-entry-wrapper">
        <Modal
          author={author}
          content={content}
          coverImage={coverImage}
          rating={rating}
          title={title}
          isOpen={this.state.detailsOpen}
          closeModal={this._closeDetails}
        />
        <div className="box" onClick={this._openDetails}>
          <article className="media">
            <div className="media-content">
              <div className="columns">
                <div className="column is-2">
                  <FluidImage fileName={coverImage} className="book-cover" />
                </div>
                <div className="column is-10">
                  <strong>{title}</strong>
                  {_.times(rating, () => (
                    <Img
                      className="rating-star"
                      fixed={data.rating_star.childImageSharp.fixed}
                    />
                  ))}

                  <br />

                  <small>{author}</small>

                  <br />

                  {excerpt}
                  <strong className="read-more" onClick={this._openDetails}>
                    {" Read more"}
                  </strong>
                  <section className="section tag-section">
                    {tags.map(tag => (
                      <Tag label={tag} />
                    ))}
                  </section>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  _closeDetails = () => {
    this.setState({
      detailsOpen: false,
    });
  };

  _openDetails = () => {
    this.setState({
      detailsOpen: true,
    });
  };
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        rating_star: file(relativePath: { eq: "rating-star.png" }) {
          childImageSharp {
            fixed(width: 18, height: 18) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <BookReviewEntry data={data} {...props} />}
  />
);
