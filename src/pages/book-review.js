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
      infoOpen: false,
      openDropdown: "",
      filters: [],
      sort: "",
    };
  }

  render() {
    const { data } = this.props;

    // Subtract 1 to account for 'info' page in "~/markdown/book-reviews/"
    const totalBooks = data.allMarkdownRemark.totalCount - 1;
    const filterOptions = {
      type: ["All", "Fiction", "Non-fiction"],
      genre: ["Psychology", "Sci-Fi", "Science", "Crime"],
    };
    const sortOptions = ["Recent", "Best", "Alphabetical"];

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

          <section className="section">
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
                  {Object.keys(filterOptions).map((heading, key) => {
                    const upperCaseHeading =
                      heading.charAt(0).toUpperCase() + heading.slice(1);
                    return (
                      <div className="level-item">
                        <Dropdown
                          key={key}
                          title={upperCaseHeading}
                          options={filterOptions[heading]}
                          active={this.state.openDropdown === heading}
                          toggleDropdown={() => this._toggleDropdown(heading)}
                          itemClick={this._dropdownItemClick}
                        />
                      </div>
                    );
                  })}
                  <Dropdown
                    title={"Sort"}
                    options={sortOptions}
                    active={this.state.openDropdown === "sort"}
                    toggleDropdown={() => this._toggleDropdown("sort")}
                    itemClick={this._dropdownItemClick}
                  />
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
                      tags={node.frontmatter.tags}
                      coverImage={node.frontmatter.coverImage}
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

  _dropdownItemClick = item => {
    this.setState(state => {
      const filters = state.filters.includes(item)
        ? state.filters
        : state.filters.concat(item);
      return {
        filters,
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
                title
                author
                coverImage
                date(formatString: "DD MMMM, YYYY")
                type
                tags
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
