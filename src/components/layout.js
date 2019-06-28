import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
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
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
