import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import "../styles.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 210, height: 61) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div>
      <header id="test">
        <nav className="navbar" role="navigation" aria-label="main-navigation">
          <div className="navbar-brand">
            <Link to="/">
              <Img fixed={data.fileName.childImageSharp.fixed} alt="" />
            </Link>

            <Link
              role="button"
              className="navbar-burger burger"
              aria-expanded="false"
              aria-label="menu"
              data-target="navbarBasic"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>
          <div id="navbarBasic" className="navbar-menu">
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
};

export default Header;
