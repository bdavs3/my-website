import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import "./styles/blog-post.scss";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="blog-post-wrapper">
        <section className="section">
          <section className="hero">
            <section className="hero-body title-section">
              <h1 className="title is-1 has-text-centered">
                {post.frontmatter.title}
              </h1>
              <h1 className="title is-3 has-text-centered">
                {post.frontmatter.date}
              </h1>
            </section>

            <section className="hero-body content">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </section>
          </section>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

export default BlogPost;
