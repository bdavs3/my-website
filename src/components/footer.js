import React from "react";
import { Link } from "gatsby";

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
          <ul className="footer-item">
            <li>These</li>
            <li>will</li>
            <li>be</li>
            <li>icons</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
