import React from "react";
import { Link } from "gatsby";

import Image from "./image";

import "./styles/footer.scss";

const Footer = () => (
  <footer className="footer is-fullwidth">
    <div className="container">
      <div className="columns">
        <div className="column">
          <aside className="menu">
            <p className="menu-label">Navigation</p>
            <ul className="menu-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/book-review">Book Review</Link>
              </li>
            </ul>
          </aside>
        </div>
        <div className="column">
          <h1 className="footer-heading">CONTACT</h1>
          <ul className="footer-item">
            <li>example@gmail.com</li>
            <li>(123) 456-7890</li>
          </ul>
        </div>
        <div className="column">
          <h1 className="footer-heading">CONNECT</h1>
          <div className="columns is-mobile">
            <div className="column is-one-quarter">
              <a
                href="https://www.github.com/bdavs3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image className="icon" fileName="github-icon.png" />
              </a>
            </div>
            <div className="column is-one-quarter">
              <a
                href="https://www.linkedin.com/in/ben-davis-a34a55149/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image className="icon" fileName="linkedin-icon.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright container has-text-centered">
        Copyright 2019 Ben Davis
      </div>
    </div>
  </footer>
);
export default Footer;
