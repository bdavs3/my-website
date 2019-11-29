import React from "react";

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
    const { author, content, coverImage, excerpt, title, tags } = this.props;

    return (
      <div className="book-review-entry-wrapper">
        <Modal
          author={author}
          content={content}
          coverImage={coverImage}
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

export default BookReviewEntry;
