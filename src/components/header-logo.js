import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 210, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.fileName.childImageSharp.fixed} alt="logo" />;
};

export default HeaderLogo;
