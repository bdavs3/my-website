import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div>
      <header>
        <nav className="navbar" role="navigation" aria-label="main-navigation">
          <div className="navbar-brand">
            <Img fixed={data.fileName.childImageSharp.fixed} alt="" />

            <Link
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
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
              <Link className="navbar-item" to="/">
                Reading Corner
              </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button className="button is-primary">
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
