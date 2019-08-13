import React from "react";

import Image from "../image";
import Modal from "./modal";

import "../styles/book-review-entry.scss";

class BookReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsOpen: false,
    };
  }

  render() {
    return (
      <div className="book-review-entry-wrapper">
        <Modal
          isOpen={this.state.detailsOpen}
          closeModal={this._closeDetails}
        />
        <div className="box hvr-radial-out" onClick={this._openDetails}>
          <article className="media">
            <div className="media-content">
              <div className="columns">
                <div className="column is-2">
                  <Image fileName="200x300.png" className="book-cover" />
                </div>
                <div className="column is-10">
                  <p>
                    <strong>Sapiens</strong>
                    <br></br>
                    <small>Yuval Noah Harari</small>
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean efficitur sit amet massa fringilla egestas. Nullam
                    condimentum luctus turpis. Lorem ipsum dolor sit amet,
                    consectetur..Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aenean efficitur sit amet massa fringilla
                    egestas. Nullam condimentum luctus turpis. Lorem ipsum dolor
                    sit amet, consectetur..{" "}
                    <strong className="read-more" onClick={this._openDetails}>
                      Read more
                    </strong>
                  </p>
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
