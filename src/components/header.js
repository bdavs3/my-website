import React from "react";
import { Link } from "gatsby";

import HeaderLogo from "./header-logo";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuExpanded: false,
    };
  }

  render() {
    return (
      <div>
        <header>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main-navigation"
          >
            <div className="navbar-brand">
              <Link to="/">
                <HeaderLogo />
              </Link>

              <button
                id="mobileHeaderToggle"
                onClick={this._toggleMenu}
                className={`navbar-burger burger ${
                  this.state.menuExpanded ? "is-active" : ""
                }`}
                aria-expanded="false"
                aria-label="menu"
                data-target="navMenu"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${
                this.state.menuExpanded ? "is-active" : ""
              }`}
            >
              <div className="navbar-start">
                <Link className="navbar-item" to="/portfolio">
                  Portfolio
                </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="/reading-corner">
                  Reading Corner
                </Link>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <button className="button is-info">
                      <strong>Sign up</strong>
                    </button>
                    <button className="button is-light">Log in</button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }

  _toggleMenu = () => {
    this.setState({
      menuExpanded: !this.state.menuExpanded,
    });
  };
}

export default Header;
