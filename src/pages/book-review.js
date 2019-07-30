import React from "react";

import Head from "../components/head";
import Layout from "../components/layout";
import BookReviewEntry from "../components/book-review-entry";
import Dropdown from "../components/dropdown";

import "./styles/book-review.scss";

const BookReview = () => {
  const dropdownOptions = {
    0: { 0: "All", 1: "Fiction", 2: "Non-fiction" },
    1: {
      0: "Psychology",
      1: "Sci-Fi",
      2: "Science",
      3: "Crime",
    },
    2: { 0: "Recent", 1: "Best", 2: "Alphabetical" },
  };

  return (
    <div>
      <Layout>
        <Head title="Book Review" />
        <section className="section book-review-title">
          <h1 className="title is-1 has-text-centered">Book Review</h1>
        </section>

        <section className="section book-review-dropdowns">
          <div className="hero">
            <div className="hero-body">
              <div className="columns">
                <div className="column has-text-centered is-2 is-offset-one-quarter">
                  <Dropdown title="Type" options={dropdownOptions[0]} />
                </div>
                <div className="column has-text-centered is-2">
                  <Dropdown title="Genre" options={dropdownOptions[1]} />
                </div>
                <div className="column has-text-centered is-2">
                  <Dropdown title="Sort By" options={dropdownOptions[2]} />
                </div>
              </div>
              <div className="columns">
                <div className="column is-3" />
                <div className="column is-6">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search for a title"
                  />
                </div>
                <div className="column is-3" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="hero">
            <div className="hero-body entries">
              <BookReviewEntry />
              <BookReviewEntry />
              <BookReviewEntry />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default BookReview;
