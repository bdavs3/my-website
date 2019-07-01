import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const Image = () => {
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

  return <Img fixed={data.fileName.childImageSharp.fixed} alt="" />;
};

export default Image;
