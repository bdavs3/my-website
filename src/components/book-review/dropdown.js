import React from "react";

import "../styles/dropdown.scss";

const Dropdown = props => {
  const { title, options, active, toggleDropdown } = props;
  const menuItems = Object.entries(options).map(([key, value]) => {
    return (
      <a key={key} href="http://google.com" className="dropdown-item">
        {value}
      </a>
    );
  });

  return (
    <div className="dropdown-wrapper">
      <div className={`dropdown ${active ? "is-active" : ""}`}>
        <div className="dropdown-trigger">
          <button
            className="button"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>{title}</span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">{menuItems}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
