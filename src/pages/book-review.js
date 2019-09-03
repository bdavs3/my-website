import React from "react";
import { StaticQuery, graphql } from "gatsby";

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
      width: window.innerWidth,
      height: window.innerHeight,
      infoOpen: false,
      openDropdown: "",
    };

    this._updateWindowDimensions = this._updateWindowDimensions;
  }

  componentDidMount() {
    this._updateWindowDimensions();
    window.addEventListener("resize", this._updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._updateWindowDimensions);
  }

  render() {
    console.log(this.state.width);
    const { data } = this.props;

    // Subtract 1 to account for 'info' page in "~/markdown/book-reviews/"
    const totalBooks = data.allMarkdownRemark.totalCount - 1;

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
            title="Why it's important to read"
            author="Brian Greene"
            content={
              data.allMarkdownRemark.edges.filter(
                ({ node }) => node.frontmatter.type === "info"
              )[0].node.html
            }
            isOpen={this.state.infoOpen}
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
                onClick={() => this._openModal()}
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
                      <b>{totalBooks}</b> books
                    </span>
                  </div>
                  <div className="level-item">
                    <input
                      className="search-text input"
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

          <section className="section" onClick={() => this._toggleDropdown("")}>
            <div className="hero">
              <div className="hero-body entries">
                {data.allMarkdownRemark.edges
                  .filter(({ node }) => node.frontmatter.type === "entry")
                  .map(({ node, key }) => (
                    <BookReviewEntry
                      key={key}
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      excerpt={node.excerpt}
                      content={node.html}
                    />
                  ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }

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

  _updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
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
                title
                author
                date(formatString: "DD MMMM, YYYY")
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
