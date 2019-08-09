import React from "react";

import Image from "../image";

import "../styles/book-review-entry.scss";

const BookReviewEntry = () => (
  <div className="box">
    <article className="media">
      <div className="media-content">
        <div className="columns">
          <div className="column is-2">
            <Image fileName="200x300.png" className="book-cover" />
          </div>
          <div className="column is-10">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small>{" "}
              <small>31m</small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              efficitur sit amet massa fringilla egestas. Nullam condimentum
              luctus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Aenean efficitur sit amet massa fringilla egestas. Nullam
              condimentum luctus turpis.
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
);

export default BookReviewEntry;
