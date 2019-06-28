import React from "react";

import Header from "./header";
import Footer from "./footer";

// get rid of user agent stylesheets
import "../reset.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
