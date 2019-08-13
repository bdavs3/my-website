import React from "react";

import Head from "../components/head";
import Layout from "../components/layout";
import BookReviewEntry from "../components/book-review/book-review-entry";
import Dropdown from "../components/book-review/dropdown";
import Modal from "../components/book-review/modal";

import "./styles/book-review.scss";

class BookReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: "",
      openDropdown: "",
    };
  }

  render() {
    const dropdownOptions = {
      type: { 0: "All", 1: "Fiction", 2: "Non-fiction" },
      genre: {
        0: "Psychology",
        1: "Sci-Fi",
        2: "Science",
        3: "Crime",
      },
      sort: { 0: "Recent", 1: "Best", 2: "Alphabetical" },
    };

    return (
      <Layout>
        <div className="book-review-wrapper">
          <Head title="Book Review" />
          <Modal
            isOpen={this.state.openModal === "info"}
            closeModal={this._closeModal}
          />
          <section
            className="section book-review-title-section"
            onClick={() => this._toggleDropdown("")}
          >
            <h1 className="title is-1 has-text-centered">Book Review</h1>
          </section>

          <section className="section" onClick={() => this._toggleDropdown("")}>
            <div className="container has-text-centered">
              <button
                className="button info-button hvr-shrink"
                onClick={() => this._openModal("info")}
              >
                Information
              </button>
            </div>
          </section>

          <section className="section desktop-level">
            <div className="container level-holder">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <span>
                      <b>123</b> books
                    </span>
                  </div>
                  <div className="level-item">
                    <input
                      className="input"
                      type="text"
                      placeholder="Find a book"
                    />
                  </div>
                  <div className="level-item book-search">
                    <a href="http://google.com" className="button hvr-shrink">
                      Search
                    </a>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <Dropdown
                      title="Type"
                      options={dropdownOptions.type}
                      active={this.state.openDropdown === "type"}
                      toggleDropdown={() => this._toggleDropdown("type")}
                    />
                  </div>
                  <div className="level-item">
                    <Dropdown
                      title="Genre"
                      options={dropdownOptions.genre}
                      active={this.state.openDropdown === "genre"}
                      toggleDropdown={() => this._toggleDropdown("genre")}
                    />
                  </div>
                  <div className="level-item">
                    <Dropdown
                      title="Sort By"
                      options={dropdownOptions.sort}
                      active={this.state.openDropdown === "sort"}
                      toggleDropdown={() => this._toggleDropdown("sort")}
                    />
                  </div>
                </div>
              </nav>
            </div>
          </section>

          <section className="section mobile-level">
            <div className="container level-holder">
              <nav className="level is-mobile">
                <div className="level-item">
                  <span>
                    <b>123</b> books
                  </span>
                </div>
              </nav>
              <nav className="level is-mobile">
                <div className="level-item">
                  <input
                    className="input"
                    type="text"
                    placeholder="Find a book"
                  />
                </div>
                <div className="level-item book-search">
                  <a href="http://google.com" className="button">
                    Search
                  </a>
                </div>
              </nav>
              <nav className="level is-mobile">
                <div className="level-item">
                  <Dropdown
                    title="Type"
                    options={dropdownOptions.type}
                    active={this.state.openDropdown === "type"}
                    toggleDropdown={() => this._toggleDropdown("type")}
                  />
                </div>
                <div className="level-item">
                  <Dropdown
                    title="Genre"
                    options={dropdownOptions.genre}
                    active={this.state.openDropdown === "genre"}
                    toggleDropdown={() => this._toggleDropdown("genre")}
                  />
                </div>
                <div className="level-item">
                  <Dropdown
                    title="Sort By"
                    options={dropdownOptions.sort}
                    active={this.state.openDropdown === "sort"}
                    toggleDropdown={() => this._toggleDropdown("sort")}
                  />
                </div>
              </nav>
            </div>
          </section>

          <section className="section" onClick={() => this._toggleDropdown("")}>
            <div className="hero">
              <div className="hero-body entries">
                <BookReviewEntry />
                <BookReviewEntry />
                <BookReviewEntry />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }

  _openModal = modalName => {
    this.setState({
      openModal: modalName,
    });
  };

  _closeModal = () => {
    this.setState({
      openModal: "",
    });
  };

  _toggleDropdown = dropdownName => {
    this.setState({
      openDropdown:
        this.state.openDropdown !== dropdownName ? dropdownName : "",
    });
  };
}

export default BookReview;
