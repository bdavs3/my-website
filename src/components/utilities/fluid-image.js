import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const FluidImage = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(e => {
        return e.node.relativePath.includes(props.fileName);
      });

      if (!image) {
        return null;
      }

      return (
        <Img fluid={image.node.childImageSharp.fluid} durationFadeIn={2000} />
      );
    }}
  />
);

export default FluidImage;
