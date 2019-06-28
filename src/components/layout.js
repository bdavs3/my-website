import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

// get rid of user agent stylesheets
import "../reset.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <Header title={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
