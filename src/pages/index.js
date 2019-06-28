import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import "../styles.scss";

const IndexPage = () => (
  <Layout>
    <h1>You're on the landing page</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
