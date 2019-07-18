import React from "react";
import { Link, graphql } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";

import "../styles.scss";
import "./styles/blog.scss";

const Blog = ({ data }) => {
  return (
    <Layout>
      <Head title="Blog" />
      <section className="section">
        <h1 className="title blog-title is-1 has-text-centered">Blog</h1>
      </section>
      <section className="section">
        <section className="hero">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <section key={node.id} className="hero-body">
              <h3>
                <Link to="/">{node.frontmatter.title}</Link>{" "}
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
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;

export default Blog;
