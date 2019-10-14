import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Fuse from "fuse.js";

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
      infoOpen: false,
      openDropdown: "",
      searchText: "",
      fuzzySearchResults: ["init"],
      genreFilter: [],
      sortOrder: "",
    };
  }

  render() {
    const { data } = this.props;

    // Subtract 1 to account for 'info' page in "~/markdown/book-reviews/"
    const totalBooks = data.allMarkdownRemark.totalCount - 1;
    const genreOptions = [];
    const sortOptions = ["Recent", "Best", "Alphabetical"];
    // Learn about how this fuzzy search works at fuse.js
    const fuzzySearchOptions = {
      threshold: 0.3,
      keys: ["title", "author", "genre"],
      id: "title",
    };

    return (
      <Layout>
        <div className="book-review-wrapper">
          <Head title="Book Review" />
          {data.allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.type === "info")
            .map(({ node, key }) => (
              <Modal
                key={key}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                content={node.html}
                isOpen={this.state.infoOpen}
                closeModal={this._closeModal}
              />
            ))}
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
                onClick={() => this._openModal()}
              >
                My Rating Schema
              </button>
            </div>
          </section>

          <section className="section">
            <div className="container level-holder">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <span>
                      <b>
                        {this.state.fuzzySearchResults.includes("init")
                          ? totalBooks
                          : this.state.fuzzySearchResults.length}
                      </b>{" "}
                      books
                    </span>
                  </div>
                  <div className="level-item">
                    <input
                      className="search-text input"
                      type="text"
                      placeholder="Find a book"
                      onChange={this._updateSearchText}
                      onKeyPress={this._searchKeyPress}
                    />
                  </div>
                  <div className="level-item book-search">
                    <button
                      ref={input => (this.searchButton = input)}
                      className="button hvr-shrink"
                      onClick={() =>
                        this._fuzzySearch(
                          data.allMarkdownRemark.edges
                            .filter(
                              ({ node }) => node.frontmatter.type === "entry"
                            )
                            .map(({ node }) => ({
                              title: node.frontmatter.title,
                              author: node.frontmatter.author,
                              genre: node.frontmatter.tags,
                            })),
                          fuzzySearchOptions
                        )
                      }
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <Dropdown
                      title={"Genre"}
                      options={
                        new Set(
                          data.allMarkdownRemark.edges
                            .filter(
                              ({ node }) => node.frontmatter.type === "entry"
                            )
                            .flatMap(({ node }) => {
                              node.frontmatter.tags.forEach(tag => {
                                genreOptions.push(tag);
                              });
                              return genreOptions;
                            })
                        )
                      }
                      active={this.state.openDropdown === "genre"}
                      toggleDropdown={() => this._toggleDropdown("genre")}
                      itemClick={this._dropdownItemClick}
                    />
                  </div>
                  <div className="level-item">
                    <Dropdown
                      title={"Sort"}
                      options={sortOptions}
                      active={this.state.openDropdown === "sort"}
                      toggleDropdown={() => this._toggleDropdown("sort")}
                      itemClick={this._dropdownItemClick}
                    />
                  </div>
                </div>
              </nav>
            </div>
          </section>

          <section className="section" onClick={() => this._toggleDropdown("")}>
            <div className="hero">
              <div className="hero-body entries">
                {data.allMarkdownRemark.edges
                  .filter(
                    ({ node }) =>
                      node.frontmatter.type === "entry" &&
                      (this.state.fuzzySearchResults.includes("init") ||
                        this.state.fuzzySearchResults.includes(
                          node.frontmatter.title
                        ))
                  )
                  .map(({ node, key }) => (
                    <BookReviewEntry
                      key={key}
                      author={node.frontmatter.author}
                      content={node.html}
                      coverImage={node.frontmatter.coverImage}
                      excerpt={node.excerpt}
                      rating={node.frontmatter.rating}
                      tags={node.frontmatter.tags}
                      title={node.frontmatter.title}
                    />
                  ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }

  _searchKeyPress = evt => {
    if (evt.key === "Enter") {
      this.searchButton.click();
    }
  };

  _updateSearchText = evt => {
    this.setState({
      searchText: evt.target.value,
    });
  };

  _fuzzySearch = (books, options) => {
    const fuse = new Fuse(books, options);
    const results = this.state.searchText
      ? fuse.search(this.state.searchText)
      : ["init"];

    this.setState({
      fuzzySearchResults: results,
    });
  };

  _openModal = () => {
    this.setState({
      infoOpen: true,
    });
  };

  _closeModal = () => {
    this.setState({
      infoOpen: false,
    });
  };

  _toggleDropdown = dropdownName => {
    this.setState({
      openDropdown:
        this.state.openDropdown !== dropdownName ? dropdownName : "",
    });
  };

  _dropdownItemClick = item => {
    this.setState(state => {
      const genreFilters = state.genreFilters.includes(item)
        ? state.genreFilters
        : state.genreFilters.concat(item);
      return {
        genreFilters,
      };
    });
  };
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { class: { eq: "book-review" } } }
        ) {
          totalCount
          edges {
            node {
              html
              frontmatter {
                author
                coverImage
                date(formatString: "DD MMMM, YYYY")
                rating
                tags
                title
                type
              }
              excerpt(pruneLength: 350)
            }
          }
        }
      }
    `}
    render={data => <BookReview data={data} {...props} />}
  />
);
