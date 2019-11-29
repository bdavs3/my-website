import React from "react";

import FluidImage from "../utilities/fluid-image";

import "./styles/modal.scss";

const Modal = props => {
  const { author, content, coverImage, title, isOpen, closeModal } = props;
  return (
    <div className="modal-wrapper">
      <div className={`modal ${isOpen ? "is-active" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <div className="modal-card-title">
              <b>{title}</b>
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
            <div className="cover-image-wrapper">
              <FluidImage fileName={coverImage} />
            </div>
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

export default Modal;
// export default props => (
//   <StaticQuery
//     query={graphql`
//       query {
//         rating_star: file(relativePath: { eq: "rating-star.png" }) {
//           childImageSharp {
//             fixed(width: 18, height: 18) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Modal data={data} {...props} />}
//   />
// );
