import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";

const Blog = () => (
  <Layout>
    <Head title="Blog" />
    <h1>Hi from the blog</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Blog;
