import React from "react";

import "./styles/dropdown.scss";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  render() {
    const { title, options, collapsed } = this.props;
    const menuItems = Object.entries(options).map(([key, value]) => {
      return (
        <a key={key} href="http://google.com" className="dropdown-item">
          {value}
        </a>
      );
    });

    return (
      <div
        className={`dropdown ${
          this.state.expanded && !collapsed ? "is-active" : ""
        }`}
      >
        <div className="dropdown-trigger">
          <button
            className="button"
            onClick={this._toggleDropdown}
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
    );
  }

  _toggleDropdown = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };
}

export default Dropdown;
