import React from "react";

import "../styles/modal.scss";

const Modal = props => {
  const { title, author, content, isOpen, closeModal } = props;
  return (
    <div className="modal-wrapper">
      <div className={`modal ${isOpen ? "is-active" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              <b>{title}</b>
              {` by ${author}`}
            </p>
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

export default Modal;
