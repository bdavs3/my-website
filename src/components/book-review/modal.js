import React from "react";

import "../styles/modal.scss";

const Modal = props => {
  const { isOpen, closeModal } = props;
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
            Aenean vulputate eleifend tellus. Sed augue ipsum, egestas nec,
            vestibulum et, malesuada adipiscing, dui. Proin pretium, leo ac
            pellentesque mollis, felis nunc ultrices eros, sed gravida augue
            augue mollis justo. Pellentesque posuere. Ut a nisl id ante tempus
            hendrerit.
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
