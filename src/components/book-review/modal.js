import React from "react";
import _ from "lodash";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import "./styles/modal.scss";

const Modal = props => {
  const { data, author, content, rating, title, isOpen, closeModal } = props;
  return (
    <div className="modal-wrapper">
      <div className={`modal ${isOpen ? "is-active" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <div className="modal-card-title">
              <b>{title}</b>
              {_.times(rating, () => (
                <Img
                  className="rating-star"
                  fixed={data.rating_star.childImageSharp.fixed}
                />
              ))}

              <br />

              {` by ${author}`}
            </div>
            <button
              className="delete"
              onClick={closeModal}
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            <h1 className="title is-1">{title}</h1>
            <h1 className="title is-3">{author}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </section>
          <footer className="modal-card-foot">
            <button className="button" onClick={closeModal}>
              Exit
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

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
    render={data => <Modal data={data} {...props} />}
  />
);
