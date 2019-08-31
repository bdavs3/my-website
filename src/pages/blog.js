import React from "react";
import { Link, graphql } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";

import "../styles.scss";
import "./styles/blog.scss";

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="blog-wrapper">
        <Head title="Blog" />
        <section className="section">
          <h1 className="title is-1 has-text-centered">Blog</h1>
        </section>
        <section className="section">
          <section className="hero">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <section key={node.id} className="hero-body">
                <h3>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{" "}
                  <span>— {node.frontmatter.date}</span>
                </h3>
                <span className="read-time">
                  {`${node.timeToRead}`} minute read
                </span>
                <p>{node.excerpt}</p>
              </section>
            ))}
          </section>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog-post" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;

export default Blog;
