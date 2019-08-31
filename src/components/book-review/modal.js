import React from "react";

import "../styles/modal.scss";

const Modal = props => {
  const { content, isOpen, closeModal } = props;
  return (
    <div className="modal-wrapper">
      <div className={`modal ${isOpen ? "is-active" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button
              className="delete"
              onClick={closeModal}
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </section>
          <footer className="modal-card-foot">
            <button className="button">Save changes</button>
            <button className="button">Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
